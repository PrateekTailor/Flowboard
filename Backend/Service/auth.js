const jwt = require("jsonwebtoken");
const secret = process.env.SECRET;
function setuser(user){
    return jwt.sign({
        _id:user._id,
        Email:user.Email,
    },secret)
}
function getuser(token){
    if(!token)return null;
    try {
        return jwt.verify(token,secret);
    } catch (error) {
        return null;
    }
}

module.exports = {
    setuser,
    getuser,
}