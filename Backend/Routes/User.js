const express = require("express");
const { Userginup, Userlogin,Homepage } = require("../Controller/User");
const { ristricttologinuser } = require("../middleware/auth");
const {BoardFinding, BoardFindingbyid, Createtask} = require("../Controller/Board");
const router = express.Router();
router.get("/",Homepage);
router.get("/board",ristricttologinuser,BoardFinding);
router.get("/board/:id",ristricttologinuser,BoardFindingbyid);
router.post("/board/:id/tasks",ristricttologinuser,Createtask);
router.post("/auth/signup",Userginup);
router.post("/auth/login",Userlogin);

module.exports = router;