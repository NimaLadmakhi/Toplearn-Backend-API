/** @format */

const express = require('express');
const router = express.Router();

const CommentRoute = require('./comment');
const LikeRoute = require('./like');
const CourseRoute = require('./course');
const UserRoute = require('./user');

router.use('/comment', CommentRoute);
router.use('/like', LikeRoute);
router.use('/course', CourseRoute);
router.use('/user', UserRoute);

module.exports = router;
