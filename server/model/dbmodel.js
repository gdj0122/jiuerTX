const mongoose = require('mongoose')
const db = require('../config/db')
const Schema = mongoose.Schema;

// 用户表
let SchemaUser = new Schema();

module.exports = db.model('User',SchemaUser)