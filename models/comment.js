/** @format */

const mongoose = require('mongoose');
const schema = new mongoose.Schema(
     {
          sender: {
               type: mongoose.Schema.Types.ObjectId,
               ref: 'userDB',
          },
          courseId: {
               type: mongoose.Schema.Types.ObjectId,
               ref: 'courseDB',
          },
          createdAt: String,
     },
     { timestamps: true }
);
const model = mongoose.model('commentDB', schema);
module.exports = model;
