/** @format */

const jwt = require('jsonwebtoken');

exports.checkAuth = (req, res, next) => {
     if (req.headers && req.headers.authorization && req.headers.authorization.startsWith('Bearer ')) {
          const token = req.headers.authorization.split(' ')[1];
          const decodeToken = jwt.decode(token);
          if (decodeToken.exp * 1000 >= Date.now()) {
               req.user = decodeToken.id;
               return next();
          }
     }

     return res.status(404).json({ message: 'UnAuthorization' });
};
