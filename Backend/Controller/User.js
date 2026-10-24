const bcrypt = require("bcrypt");
const userdb = require("../Model/User");
const { setuser } = require("../service/Auth");
function Homepage(req,res) {
    return res.end("this is our website homepage");
}
async function Userginup(req,res) {
    const {Name,Email,PasswordHash} = req.body;
    const salt = await bcrypt.genSalt(10);
    const PasswordHashed = await bcrypt.hash(PasswordHash,salt);
    await userdb.create({
        Name:Name,
        Email:Email,
        PasswordHash:PasswordHashed,
    })
    return res.end("your singup you can go to the login page");
}
async function Userlogin(req,res) {
    const {Email,PasswordHash} = req.body;
    const User = await userdb.findOne({Email,PasswordHash});
    if(!User)return res.end("the user with that email and pass is not found");
    const token = setuser(User);
    res.cookie("usr",token);
    return res.json(token);
    // return res.redirect("/");
}
module.exports = {
    Homepage,
    Userginup,
    Userlogin,
}
