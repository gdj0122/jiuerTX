let dbserver = require('../dao/dbserver')
module.exports = (app) =>{
  app.get('/test',(req,res)=>{
    dbserver.findUser(res)
  })
}