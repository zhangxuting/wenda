const topicModle = require('../modules/topic');
const categoryModle = require('../modules/catetory');


//显示添加话题的页面
exports.showCreate=(req,res)=>{
    categoryModle.getAll((err,categories) => {
        res.render('topic/create.html',{
            categories,
            user: req.session.user
           })
    })
}
exports.handleCreate=(req,res)=>{
     if(!req.session.user){
         res.json({
             code :200,
             msg: '登陆过期，请先登录'
         })
     }
     req.body.userId = req.session.user.id;
     req.body.createdAt = new Date();
     topicModle.createTopic(req.body,(err,isOk)=>{
         if(err){
             return res.json({
                 code: 500,
                 msg: '服务器内部错误'
             })
         }
         if(isOk){
             res.json({
                code: 200,
                msg: '添加成功' 
             })
         }else {
            res.json({
                code: 400,
                msg: '添加失败' 
             }) 
         }
     })
}
exports.showTopic=(req,res)=>{
    
}
exports.showEdit=(req,res)=>{

}
exports.handleEdit=(req,res)=>{

}
exports.handleDelete=(req,res)=>{
  
}