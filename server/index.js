import express from "express";
import { Server } from "socket.io";
import { createServer } from "http";
import "dotenv/config";
import mongoose from "mongoose";

const PORT = process.env.PORT || 9999;
const app = express();

mongoose.connect(process.env.DB_URL);

mongoose.connection.on("connected", () => {
  console.log("DB connected.");
});

app.get("/", (req, res) => {
  try {
    res.send("App Working");
  } catch (err) {
    console.log(err);
  }
});

const server = createServer(app);

server.listen(PORT, () => {
  console.log(`App running at PORT:${PORT}.`);
});
