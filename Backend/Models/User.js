const mongoose = require("mongoose");

const userschema = new mongoose.Schema({
    Name:{
        type:String,
        required:true,
    },
    Email:{
        type:String,
        unique:true,
        lowercase:true,
        required:true,
    },
    PasswordHash:{
        type:String,
        unique:true,
    }
})

const User = mongoose.model("User",userschema);

module.exports = User;