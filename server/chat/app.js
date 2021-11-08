const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const app = express();
const expressServer = require("http").createServer(app);
const io = new Server(expressServer, { cors: { origin: "*" } });

io.on("connection", (socket) => {
  socket.on("message", ({ name, message }) => {
    io.emit("message", { name, message });
  });
});

expressServer.listen(5000, () => {
  console.log("소켓 테스트");
});
