const topicModel = require('../modules/topic');
const moment = require('moment');

exports.showIndex = (req,res)=>{
    topicModel.getall((err,topics)=>{
        if(err){
            return res.send('服务器错误');
        }
        res.render('index.html',{
            user: req.session.user,
            topics,
            moment
        });
    })
    
}