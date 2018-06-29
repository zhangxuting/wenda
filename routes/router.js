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


module.exports = router;       