const mongooes = require('mongoose');
let db = mongooes.createConnection('mongodb://localhost:27017/jiuerTX');

db.on('error',console.error.bind('connection error'));
db.once('open',()=>{console.info('数据库jiuerTX打开成功');
})


module.exports = db;