const express = require("express");
const { Userginup, Userlogin, Boardpage, Homepage } = require("../Controller/User");
const { ristricttologinuser } = require("../middleware/auth");
const router = express.Router();
router.get("/",Homepage);
router.get("/board",ristricttologinuser,Boardpage);
router.post("/signup",Userginup);
router.post("/login",Userlogin);

module.exports = router;