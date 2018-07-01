
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
//导入处理模板的模块
var art = require('express-art-template');
var router = require('./routes/router');
//处理静态资源
//导入session模块
var session = require('express-session');
var MySQLStore = require('express-mysql-session')(session);
const config = require('./config');
app.use('/public', express.static('./public'));
app.use('/node_modules', express.static('./node_modules'));


app.engine('html', require('express-art-template'));
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json())
//把session配置到数据库中
var options = {
    host: config.database.localhost,
    port: config.database.port,
    user: config.database.user,
    password: config.database.password,
    database: config.database.database
};
 
var sessionStore = new MySQLStore(options);
//配置session
app.use(session({
    key: 'sessionid',
    secret: 'keyboard cat',
    resave: false,
    store: sessionStore,
    saveUninitialized: true
}))



app.use(router);

app.listen(config.port,()=>{
    console.log('成功了');
})


