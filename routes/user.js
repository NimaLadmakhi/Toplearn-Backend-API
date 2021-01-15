/** @format */

const express = require('express');
const uploader = require('../config/uploader');
const router = express.Router();
const userDB = require('../models/user');
const bcrypt = require('bcrypt');
const { recognizeRole, generateToken } = require('../config/help');
const { checkAuth } = require('../config/auth');

router.post('/signup', async (req, res, next) => {
     const { body } = req;
     body.password = await bcrypt.hash(body.password, 8);
     body.imageUrl = `defaultImage-${Math.floor(Math.random() * 4)}.png`;
     body.role = recognizeRole(body.role);
     body.account = 0;
     body.createdAt = new Date(Date.now()).toISOString();
     console.log(body);
     const user = await new userDB(body).save();
     const token = generateToken(user._id);
     return res.json({ token, message: 'sign up successfully' });
});

router.post('/login', async (req, res, next) => {
     const { body } = req;
     const user = await userDB.findOne({ email: body.email });
     if (!user) return res.status(404).json({ message: 'The User Not Found With This Email' });
     const isPasswordOK = await bcrypt.compare(body.password, user.password);
     if (!isPasswordOK) return res.status(500).json({ message: 'The Email is Not Match with Password' });
     const token = generateToken(user._id);
     return res.json({ token });
});

router.put('/update', checkAuth, uploader.single('profile'), async (req, res, next) => {
     const id = req.user;
     const user = await userDB.findById(id);
     if (!user) return res.status(404).json({ message: 'The User With This ID is not found' });
     const { body } = req;
     if (req.file && req.file.filename) body.profile = req.file.filename;
     if (body.password) {
          body.forgetPassword = user.password;
          body.password = await bcrypt.hash(body.password, 8);
     }
     const bodyUpdate = Object.assign(user, body);
     await user.update(bodyUpdate);
     return res.json({ message: 'The User Update Sucessfully' });
});

router.put('/forget-password', async (req, res, next) => {
     const { body } = req;
     const user = await userDB.findOne({ email: body.email });
     if (!user) return res.status(404).json({ message: 'The User Not Found With This EMAIL' });
     const isSamePassword = await bcrypt.compare(body.password, user.forgetPassword);
     if (!isSamePassword) return res.status(500).json({ message: 'The User Email is Not Match With Latest Password' });
     const newPassword = await bcrypt.hash(body.newPassword, 8);
     await user.update({ password: newPassword, forgetPassword: user.password });
     return res.json({ password: 'UPDATED' });
});

module.exports = router;
