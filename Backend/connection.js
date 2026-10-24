const mongoose = require("mongoose");

function dbconnection(url){
    return mongoose.connect(url);
}

module.exports = dbconnection;