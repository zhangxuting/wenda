const express = require('express');

const router = express.Router();

const index = require('../controllers/index');
const topic = require('../controllers/topic');
const user = require('../controllers/user');
const category = require('../controllers/category');

router.get('/',index.showIndex);

router.get('/signin',user.showSignin)
      .post('/signin',user.handeSingin)
      .get('/signup',user.showSignup)
      .post('/signup',user.handeSingup)
      .get('/signout',user.handeSingout)

// 3 topic.js 
router
  .get('/topic/create', topic.showCreate)
  .post('/topic/create', topic.handleCreate)
  // 动态路由，可以传递参数
  .get('/topic/:topicID', topic.showTopic)
  .get('/topic/:topicID/edit', topic.showEdit)
  .post('/topic/:topicID/edit', topic.handleEdit)
  .get('/topic/:topicID/delete', topic.handleDelete)
module.exports = router;       