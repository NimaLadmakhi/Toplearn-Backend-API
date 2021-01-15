/** @format */
const jwt = require('jsonwebtoken');

exports.recognizeRole = (roleName) => {
     let role;
     switch (roleName) {
          case 'admin':
               role = 0;
               break;
          case 'teacher':
               role = 1;
               break;
          case 'student':
               role = 2;
               break;
     }
     return role;
};

exports.generateToken = (id) => {
     return jwt.sign({ id }, 'supersecretkey', { expiresIn: '24h' });
};
