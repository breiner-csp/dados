var users = {};

const getUserList = () => {
  let usernames = Object.values(users);
  console.table(usernames);
};

const socketHandler = (io) => {
  io.on("connection", (socket) => {
    socket.on("disconnect", () => {
      console.log(`User disconnected: ${socket.username}`);
      delete users[socket.id];
      getUserList();
    });

    socket.on("onSetName", (name) => {
      socket.username = name;
      users[socket.id] = name;
      console.log(`User connected: ${socket.username}`);
      getUserList();
    });
  });
};

module.exports = socketHandler;
