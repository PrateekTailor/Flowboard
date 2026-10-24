const { getuser } = require("../service/Auth");

async function ristricttologinuser(req,res,next) {
    const Userid = req.headers["authorization"];
    if(!Userid)return res.end("userid is not found");
    const token = Userid.split("Bearer ")[1];
    const user = getuser(token);
    req.user = user;
    next();
}

module.exports = {
    ristricttologinuser,
}