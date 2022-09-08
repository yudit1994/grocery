const express = require('express');
const app = express();
const port = 8000;



//body parser for url encoding
app.use(express.urlencoded());

//setting ejs as view template
app.set('view engine','ejs');

//setting up routes
app.use('/',require('./routes/index'));


//import mongoose configuration
const mongoose = require('./config/mongoose');

//setting up server
app.listen(port,function(err){
    if(err){
    console.log('error',err);
    return;
    }
    console.log('server running');
});