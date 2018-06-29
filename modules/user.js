
const db = require('./db_helper');

//插入一个用户
exports.createUser = (user,callback)=>{
    db.query('insert into `users` set ?', user,(err,results)=>{
        if(err){
            return callback(err);
        };
        if(results. affectedRows > 0){
            callback(null,true);
        }else {
            callback(null,false);
        };
     })
}
 //验证邮箱是否重复
exports.getByEmail = (email,callback)=>{
    
     db.query('select * from `users` where `email`=?',email,(err,results)=>{
        if(err){
            return callback(err);
        }
        if(results.length>0){
           callback(null,results[0]);
        }else {
           callback(null,null);
        }
    })
}

exports.getByNickname = (nickname,callback)=>{
         //验证昵称是否存在
         db.query('select * from `users` where `nickname`=?',nickname,(err,results)=>{
            if(err){
                return callback(err);;
            }
            if(results.length>0){
               callback(null,results[0]);
            }else {
               callback(null,null);
            }
 })
}