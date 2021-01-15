/** @format */

const mongoose = require('mongoose');
const schema = new mongoose.Schema(
     {
          price: Number,
          customer: { ref: 'userDB', type: mongoose.Schema.Types.ObjectId },
          course: { ref: 'courseDB', type: mongoose.Schema.Types.ObjectId },
          createdAt: String,
          status: Number,
     },
     { timestamps: true }
);
const model = mongoose.model('factorDB', schema);
module.exports = model;
