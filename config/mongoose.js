const mongoose = require('mongoose');
const db= mongoose.connection;


mongoose.connect(process.env.db || 'mongodb://localhost:27017/grocery');

module.exports=db;