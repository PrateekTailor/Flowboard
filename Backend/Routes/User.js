const express = require("express");
const { Homepage, Userginup, Userlogin } = require("../Controller/User");
const { ristricttologinuser } = require("../middleware/auth");
const router = express.Router();

router.get("/",ristricttologinuser,Homepage);
router.post("/signup",Userginup);
router.post("/login",Userlogin);

module.exports = router;