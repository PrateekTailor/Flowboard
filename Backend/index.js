require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT;
const healthroute = require("./Routes/Health");
const routes = require("./Routes/User");
const dbconnection = require("./connection");

app.use(express.json());

dbconnection(process.env.MONGO_URI)
.then(()=>console.log("database was connected")
).catch((err)=>console.log("database was not connected"))

app.use("/",healthroute);
app.use("/",routes);

app.listen(PORT,console.log("Server Start"));