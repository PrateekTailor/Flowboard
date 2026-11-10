require("dotenv").config();
const cors = require("cors");
const express = require("express");
const app = express();
const PORT = process.env.PORT;
const healthroute = require("./Routes/Health");
const routes = require("./Routes/User");
const dbconnection = require("./connection");

app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());

dbconnection(process.env.MONGO_URI)
.then(()=>console.log("database was connected")
).catch((err)=>console.log("database was not connected"))

app.use("/",healthroute);
app.use("/api",routes);

app.listen(PORT,console.log("Server Start"));