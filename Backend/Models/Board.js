const mongoose = require("mongoose");

const BoardSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim:true,
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },
},{timestamps:true});

const Board = mongoose.model("Board",BoardSchema);


module.exports =  Board;