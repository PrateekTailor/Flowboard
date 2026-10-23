require("dotenv").config();
const express = require("express");
const app = express();
const port  = process.env.PORT || 8001;
const route = require("./Routes/Health");

app.use("/api",route);

app.listen(port,console.log("server was started"))