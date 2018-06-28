const express = require('express');

const router = express.Router();

const index = require('../controllers/index');
const topic = require('../controllers/topic');
const user = require('../controllers/user');

router.get('/',index.showIndex);

// router.get('/',topic.show)
//        .post('/signin');





module.exports = router;       