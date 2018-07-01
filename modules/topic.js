const db = require('./db_helper');
//添加话题
exports.createTopic = (topic,callback)=>{
    db.query('insert into `topics` set ?',topic,(err,results)=>{
        if(err){
            return callback(err);
        }
        if(results.affectedRows > 0){
            callback(null,true);
        }else {
            callback(null,false); 
        }
    })
}
//根据id查询详情页
exports.getById = (id,callback)=>{
    db.query('select * from `topics` where id=?',id,(err,results)=>{
        if(err){
            return callback(err);
        }
        if(results.length > 0){
            callback(null,results[0]);
        }else {
            callback(null,null); 
        }
    })
}
//根据id删除话题
exports.delete = (id,callback)=>{
    db,query('delete from `topics` where id=?',id,(err,results)=>{
        if(err){
            return callback(err);
        }
        if(results.affectedRows > 0){
            callback(null,true);
        }else {
            callback(null,false); 
        }
    })
}
//修改话题
exports.updata = (id,callback)=>{
    db,query('updata `topics` set `title`=? `content`=? `category`=? where id=?',
     [topic.title, topic.content, topic.categoryId, topic.id],
     (err,results)=>{
        if(err){
            return callback(err);
        }
        if(results.affectedRows > 0){
            callback(null,true);
        }else {
            callback(null,false); 
        }
    })
}
//查询所有话题
exports.getall = (callback)=>{
     db.query('select topics.id, nickname, title, topics.createdAt from `topics` join `users` on topics.userId=users.id',(err,results)=>{
          if(err){
              return callback(err);
          }
          callback(null,results);
     })
}