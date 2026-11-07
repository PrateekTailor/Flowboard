const bcrypt = require("bcrypt");
const userdb = require("../Models/User");
const { setuser } = require("../service/Auth");
const {createdefaultboard } = require("../utils/defaultboard")
function Homepage(req,res){
    return res.end("This is our website Home Page");
}
function Boardpage(req,res) {
    return res.json({message:"Board find Done",user:req.user})
}
async function Userginup(req,res) {
    try {
    const {Name,Email,PasswordHash} = req.body;
    const salt = await bcrypt.genSalt(10);
    const PasswordHashed = await bcrypt.hash(PasswordHash,salt);
    const newuser = await userdb.create({
        Name:Name,
        Email:Email,
        PasswordHash:PasswordHashed,
    })
    createdefaultboard(newuser._id)
    res.status(201).json({message:"Signup is Done!"})
    } catch (error) {
        console.log(error);
        
        res.status(500).json({message:"server error in signup"})
    }
}
async function Userlogin(req,res) {
    try {
         const {Email,PasswordHash} = req.body;
         const User = await userdb.findOne({Email});
         if(!User){
            res.status(401).json({message:"User is not found form this email"})
         }
         const Passmatch = await bcrypt.compare(PasswordHash,User.PasswordHash);
         if(!Passmatch){
            res.status(401).json({message:"Pass is not matched"});
         }
         
         const token = setuser(User);
    res.cookie("usr",token);
    res.status(201).json({token , message:"your are Logined!"})
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"your login info mistake in server"});
    }
    // return res.redirect("/");
}
module.exports = {
    Homepage,
    Boardpage,
    Userginup,
    Userlogin,
}
