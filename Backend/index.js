require("dotenv").config();
const express = require("express");
const app = express();
const port  = process.env.PORT;
const route = require("./Routes/Health");
const {connectiondbs} = require("./connection");

console.log(process.env.MONGO_URI);
connectiondbs(process.env.MONGO_URI).then(()=>console.log("database was connected")
).catch((err)=>console.log("database was not connect",err));

app.use("/api",route);

app.listen(port,console.log("server was started"));