const express = require('express')
const app = express()
const port = 3000;
//设置允许跨域访问该服务.
app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Content-Type', 'application/json;charset=utf-8');
  next();
});
require('./router/index')(app)
app.use((req,res,next)=>{
  let err = new Error('Not Found')
  err.status = 404;
  next(err)
})
// 出现错误处理
app.use((err,req,res,next)=>{
  res.status(err.status||500)
  res.send(err.message)
})
app.listen(port,()=>{
  console.log('localhost:3000');
})