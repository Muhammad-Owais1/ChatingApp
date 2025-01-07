import express from "express";
import { Server } from "socket.io";
import { createServer } from "http";
import "dotenv/config";

const PORT = process.env.PORT || 9999;
const app = express();

app.get("/", (req, res) => {
  res.send("App Working");
});

const server = createServer(app);

server.listen(PORT, () => {
  console.log(`App running at PORT:${PORT}.`);
});
