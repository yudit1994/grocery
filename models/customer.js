const mongoose = require('mongoose');

const reportschema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    }
});
const customer = mongoose.model('customer',reportschema);
module.exports = customer;