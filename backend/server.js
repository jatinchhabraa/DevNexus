import "dotenv/config";

import http from "http";
import app from "./app.js";
import { Server } from "socket.io";

const port = process.env.PORT || 3000;

const server = http.createServer(app);

const io = new Server(server);

io.on("connection", (Socket) => {
  console.log("a user connected");
  Socket.on("event", (data) => {
    /* … */
  });
  Socket.on("disconnect", () => {
    /* … */
  });
});

server.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
