/** @format */

const mongoose = require('mongoose');
const schema = new mongoose.Schema(
     {
          firstName: String,
          lastName: String,
          email: String,
          userName: String,
          phoneNumber: String,
          address: String,
          webURL: String,
          imageUrl: String,
          createdAt: String,
          latestUpdate: String,
          account: Number,
          biography: String,
          role: Number,
          password: String,
          forgetPassword: String,
          likes: [{ ref: 'likeDB', type: mongoose.Schema.Types.ObjectId }],
          comments: [{ ref: 'commentDB', type: mongoose.Schema.Types.ObjectId }],
          courses: [{ ref: 'courseDB', type: mongoose.Schema.Types.ObjectId }],
          factors: [{ ref: 'factorDB', type: mongoose.Schema.Types.ObjectId }],
     },
     { timestamps: true }
);
const model = mongoose.model('userDB', schema);
module.exports = model;
