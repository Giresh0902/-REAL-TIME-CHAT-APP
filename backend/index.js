const http = require("http");
const express = require("express");
const cors = require("cors");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);

app.use(cors({
  origin: "*", // Allow all origins for testing
  methods: ["GET", "POST"]
}));

const io = new Server(server, {
  cors: {
    origin: "*", // Allow all origins for testing
    methods: ["GET", "POST"]
  }
});

io.on("connection", (socket) => {
  console.log(`New client connected: ${socket.id}`);

  // Handle incoming message and broadcast to all clients
  socket.on("user-message", (message) => {
    io.emit("message", { id: socket.id, message });
  });

  socket.on("disconnect", () => {
    console.log(`Client disconnected: ${socket.id}`);
  });
});

const PORT = 9000;
server.listen(PORT, '0.0.0.0', () => console.log(`Server started on PORT: ${PORT}`));
