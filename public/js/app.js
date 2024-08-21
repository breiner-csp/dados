console.log("app.js");
const socket = io();
let username = "";

while (username == "" || username == null || username == undefined) {
  username = prompt("¿Cuál es tu nombre?");
  console.log(username);
}

socket.emit("onSetName", username);
