const mongoose = require("mongoose");

const ColumnSchema = new mongoose.Schema({
    board:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Board",
        required:true,
    },
    title:{
        type:String,
        required:true,
        trim:true,
    },
    position:{
        type:Number,
        default:0,
    },
},{timestamps:true});

const Column = mongoose.model("Column",ColumnSchema);

module.exports = Column;