const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
    board:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Board",
        required:true,
    },
    column:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Board",
        required:true,
    },
    company:{
        type:String,
        required:true,
        trim:true,
    },
    role:{
        type:String,
        required:true,
        trim:true,
    },
    tags:{
        type:[String],
        default:[],
    },
    duedate:{
        type:Date,
    },
    position:{
        type:Number,
        default:0
    }
},{timestamps:true});

const Task = mongoose.model("Task",TaskSchema);

export default Task;