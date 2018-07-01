
const md5 = require('md5');
const userInfo = require('../modules/user');
//展示登录页面
exports.showSignin = (req,res)=>{
    res.render('signin.html');
};
//处理登录页面
exports.handeSingin = (req,res)=>{
    //验证用户名和密码是否正确
    userInfo.getByEmail(req.body.email,(err,user)=>{
        if(err){
            return res.send('服务器内部错误')
        }
        if(!user){
            return res.json({
                code: 401,
                msg: '邮箱不存在'
            })
        }
        const password = md5(req.body.password);
        if(password != user.password){
            return res.json({
                code: 402,
                msg: '密码错误'
            })
        }else {
            delete user.password;
            req.session.user = user;
            return res.json({
                code: 200,
                msg: '登录成功'
            })
        }
    }) 
}




//展示注册页面
exports.showSignup = (req,res)=>{
    res.render('signup.html');
}
//处理注册逻辑页面
exports.handeSingup = (req,res)=>{
             //验证邮箱
             userInfo.getByEmail(req.body.email,(err,user)=>{
                    if(err){
                        return res.send('服务器内部错误');
                    }
                    if(user){
                        return res.render('signup.html',{
                            msg: '邮箱已存在'
                        })
                    }
                    userInfo.getByNickname(req.body.nickname,(err,user)=>{
                        if(err){
                            return res.send('服务器内部错误');
                        }
                        if(user){
                            return res.render('signup.html',{
                                msg: '昵称已存在'
                            })
                        }
                         //插入数据
                            req.body.createdAt = new Date();
                            req.body.password = md5(req.body.password);
                            userInfo.createUser(req.body,(err,isok)=>{
                                if(err){
                                    return res.send('服务器内部错误');
                                }
                                if(isok){
                                    return res.redirect('/signin');
                                }else{
                                    return res.render('signup.html');
                                }
                            })
         
                    })
             })

      

              
           
  

 
}








exports.handeSingout = (req,res)=>{
    //销毁session,跳转到登录页面
    req.session.destroy();
    res.redirect('/signin');
}
