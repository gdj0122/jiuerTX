let dbmodel = require('../model/dbmodel');
let User = dbmodel.model('User')

exports.findUser=(res)=>{
  User.find((err,val)=>{
    if(err){
      console.log("用户数据查找失败",err);
    }else{
      res.send(val)
    }
  })
}