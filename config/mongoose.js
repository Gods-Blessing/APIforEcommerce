const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://devmohit:BugtrackerDevmohit@cluster0.xqp6c.mongodb.net/?retryWrites=true&w=majority");


const db = mongoose.connection;

db.on('false', function(err){
    if(err){
        console.log("error while connecting to database");
        return;
    }
})

db.once('open', function(err){
    console.log("connected to database");
})

module.exports = db;