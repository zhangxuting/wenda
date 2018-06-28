
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
//导入处理模板的模块
var art = require('express-art-template');
var router = require('./routes/router');
//处理静态资源
app.use('/public', express.static('./public'));
app.use('/node_modules', express.static('./node_modules'));


app.engine('html', require('express-art-template'));
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json())




app.use(router);

app.listen(3000,()=>{
    console.log('成功了');
})


