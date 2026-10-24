const express = require("express");
const router = express.Router();

router.get("/health",(req,res)=>{
    return res.end("this is for health check for this website");
})

module.exports = router;