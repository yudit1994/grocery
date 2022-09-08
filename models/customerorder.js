const mongoose = require('mongoose');

const reportschema = mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    productList:{
        type:String,
        required:true
    },
    totalPrice:{
        type:String,
        required:true
    },
    paymentInfo:{
        type:String,
        required:true
    }
});
const customerorder = mongoose.model('customerorder',reportschema);
module.exports = customerorder;