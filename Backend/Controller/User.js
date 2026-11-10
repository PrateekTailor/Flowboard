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
async function Userginup(req, res) {
  try {
    console.log("SIGNUP BODY:", req.body);

    const { Name, Email, password } = req.body;

    if (!Name || !Email || !password) {
      return res.status(400).json({ message: "Name, email aur password zaroori hain" });
    }

    const salt = await bcrypt.genSalt(10);
    const PasswordHashed = await bcrypt.hash(password, salt);

    const newuser = await userdb.create({
      Name: Name,
      Email: Email,
      PasswordHash: PasswordHashed,
    });

    await createdefaultboard(newuser._id);

    return res.status(201).json({ message: "Signup is Done!" });
  } catch (error) {
    console.log("SIGNUP ERROR:", error);
    return res.status(500).json({ message: "server error in signup" });
  }
}
async function Userlogin(req,res) {
    try {
         const {Email,password} = req.body;
         const User = await userdb.findOne({Email});
         if(!User){
            res.status(401).json({message:"User is not found form this email"})
         }
         console.log(req.body);
         console.log(User);
         
         const Passmatch = await bcrypt.compare(password,User.PasswordHash);
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
