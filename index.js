require("dotenv").config();
const express = require("express");
const socketHandler = require("./socketsHanddler");
const app = express();
const port = process.env.PORT;

app.use(express.static("public"));

app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.render("index", { title: "Hey", message: "Hello there!" });
});

const server = require("http").createServer(app);
const io = require("socket.io")(server);
socketHandler(io);

server.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
