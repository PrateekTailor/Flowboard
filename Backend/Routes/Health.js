const express = require("express");
const router = express.Router();

router.get("/health",(req,res)=>{
    res.end("this is health check from they server");
})

module.exports = router;