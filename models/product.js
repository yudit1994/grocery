const mongoose = require('mongoose');

const productschema = mongoose.Schema({
    productCategory:{
        type:String,
        required:true
    },
    productInfo:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    quantityAvailable:{
        type:String,
        required:true
    }
});
const product = mongoose.model('product',productschema);
module.exports = product;