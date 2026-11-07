const { getuser } = require("../service/Auth");

async function ristricttologinuser(req,res,next) {
    const Userid = req.headers["authorization"];
    if(!Userid||!Userid.startsWith("Bearer ")){
        return res.status(401).json({message:"First Login"})
    }
    const token = Userid.split("Bearer ")[1];
    const user = getuser(token);
    if(!user){
        return res.status(401).json({message:"token will expired"})
    }
    req.user = user;
    next();
}

module.exports = {
    ristricttologinuser,
}