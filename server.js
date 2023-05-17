const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const mongoDB = require("./database/connect");
const saveContactRouter = require("./Router/saveContactRouter");
const registerUserRouter = require("./Router/registerUserRouter");
dotenv.config({ path: "./config.env" });

const app = express();

app.use(express.static("./public"));
app.use(express.json());

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.use("/", registerUserRouter);
app.use("/contact", saveContactRouter);

const start = async () => {
  await mongoDB(process.env.MONGODB_URI);
  app.listen(8000, () => {
    console.log("server is running on port 8000");
  });
};
start();
