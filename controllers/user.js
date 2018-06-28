const db = require('./db_helper');
const md5 = require('md5');

//展示登录页面
exports.showSignin = (req,res)=>{
    res.render('signin.html');
};
//处理登录页面
exports.handeSingin = (req,res)=>{
    //验证用户名和密码是否正确
    db.query('select * from `users` where `email`=?', req.body.email,(err,results)=>{
            if(err){
                return res.send('服务器内部错误');
            }
            if(results.length <= 0 ){
                return res.json({
                    code: 401,
                    msg: '邮箱不存在'
                })
            }
            const password = md5(req.body.password);
            if(password !=results[0].password){
                return res.json({
                    code: 402,
                    msg: '密码错误'
                })
            }
            res.json({
                code: 200,
                msg: '登录成功'
            })

      })
}




//展示注册页面
exports.showSignup = (req,res)=>{
    res.render('signup.html');
}
//处理注册逻辑页面
exports.handeSingup = (req,res)=>{
    //验证邮箱是否重复
    db.query('select * from `users` where `email`=?',req.body.email,(err,results)=>{
          if(err){
              return res.send('服务器内部错误');
          }
        //   console.log(results);
          if(results.length>0){
              res.render('signup.html',{
                  msg: '邮箱已存在'
              });
              return;
          }

           //验证昵称是否存在
        db.query('select * from `users` where `nickname`=?',req.body.nickname,(err,results)=>{
            if(err){
                return res.send('服务器内部错误');
            }
            // console.log(results);
            if(results.length>0){
                res.render('signup.html',{
                    msg: '昵称已存在'
                });
                return;
            };

              
            //插入数据
                req.body.createdAt = new Date();
                req.body.password = md5(req.body.password);
                db.query('insert into users set ?',
                        req.body,(err,results)=>{
                            if(err){
                                console.log(err);
                                return res.send('服务器内部错误');
                            };
                            // console.log(results);
                            if(results. affectedRows == 1){
                                 res.redirect('/signin')
                             }else {
                                 res.render('signup.html',{
                                     msg:'注册失败'
                                 })
                             };
                        })
                    })
  
})
 
}








exports.handeSingout = (req,res)=>{
    res.send('s')
}
