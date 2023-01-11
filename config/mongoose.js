const mongoose = require("mongoose");

mongoose.connect(process.env.dburl);


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