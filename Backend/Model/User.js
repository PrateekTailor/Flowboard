const mongoose = require("mongoose");

const userschema = new mongoose.Schema({
    Name:{
        type:String,
        required:true,
    },
    Email:{
        type:String,
        required:true,
        unique:true,
    },
    PasswordHash:{
        type:String,
        required:true,
    }
})

const User = mongoose.model("usr",userschema);

module.exports = User;