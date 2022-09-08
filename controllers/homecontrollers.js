const cust = require('../models/customer');
const prod = require('../models/product');
const custord = require('../models/customerorder');
module.exports.customer = function(req,res){
   cust.create({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone
   },function(err,customer){
      if(err){
        console.log('error in creating cutomer',err);
      }
      if(customer){
        return res.status(200).send('cutomer created successfully');
      }
      else{
        return res.status(500).send('cutomer not created');
      }
   })
}
module.exports.product = function(req,res){
   prod.create({
    productCategory: req.body.productCategory,
    productInfo: req.body.productInfo,
    price: req.body.price,
    quantityAvailable: req.body.quantityAvailable
   },function(err,product){
     if(err){
        return res.status(500).send('not createdddd');
     }
     if(product){
        return res.status(200).send('created successfully');
     }
     else{
        return res.status(500).send('not created');
     }
   })
}
module.exports.customerlist = function(req,res){
    cust.find({},function(err,customerlist){
        if(err){
         return res.status(500).send('error in fetching');
        }
        if(customerlist){
            return res.status(200).send(customerlist);
        }else{
         return res.status(500).send('list not fetched');
        }
    })
}
module.exports.customerorder = function(req,res){
    custord.create({
        email: req.body.email,
        productList: req.body.productList,
        totalPrice: req.body.totalPrice,
        paymentInfo: req.body.paymentInfo
    },function(err,customerorder){
        if(err){
            return res.status(500).send('error in fetching'); 
        }
        if(customerorder){
            return res.status(200).send('created successfully');
         }
         else{
            return res.status(500).send('not created');
         }
    })
}
module.exports.customerorderlist = function(req,res){
    custord.find({email:req.body.email},function(err,customerlist){
        if(err){
            return res.status(500).send('error in fetching');
           }
           if(customerlist){
               return res.status(200).send(customerlist);
           }else{
            return res.status(500).send('list not fetched');
           }
    })
}
module.exports.productpriceupdate = function(req,res){
    prod.updateOne({productCategory:req.body.productCategory},{$set:{
        price: req.body.price
    }},function(err,product){
        if(err){
            return res.status(500).send('error in updating');  
        }
        if(product){
            return res.status(200).send('successfully updated');
        }else{
            return res.status(500).send('product not updated');
           }
    })
}