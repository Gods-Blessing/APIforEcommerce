const express = require('express');
const port = process.env.PORT || 8000;
const app = express();
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const db = require('./config/mongoose'); 
const path = require('path');



app.use(express.urlencoded());
app.use(express.static('./assets'));
app.set('view engine', 'ejs');
app.set('views', './views');




app.use('/', require('./routes/index'));


app.listen(port, function(err){
    if(err){
        console.log("error while connecting to server");
        return;
    }
    console.log("connected to server:" + port);
})