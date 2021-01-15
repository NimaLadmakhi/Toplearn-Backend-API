/** @format */

const mongoose = require('mongoose');
const schema = new mongoose.Schema(
     {
          subject: String,
          title: String,
          price: Number,
          isFinish: Boolean,
          description: String,
          teacherId: {
               type: mongoose.Schema.Types.ObjectId,
               ref: 'userDB',
          },
          imageUrl: String,
          duration: String,
          createdAt: String,
          lastUpdate: String,
          likes: [{ ref: 'likeDB', type: mongoose.Schema.Types.ObjectId }],
          comments: [{ ref: 'commentDB', type: mongoose.Schema.Types.ObjectId }],
          students: [{ ref: 'studentDB', type: mongoose.Schema.Types.ObjectId }],
          tags: [{ type: String }],
          videoTopics: [{ type: String }],
          level: String,
     },
     { timestamps: true }
);
const model = mongoose.model('courseDB', schema);
module.exports = model;
