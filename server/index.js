import express from "express";
import { Server } from "socket.io";
import { createServer } from "http";
import "dotenv/config";
import mongoose from "mongoose";
import cors from "cors";

import routes from "./src/routes/index.js";

const PORT = process.env.PORT || 9999;
const app = express();

app.use(cors());
app.use(express.json());

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

app.use("/api", routes);

const server = createServer(app);

server.listen(PORT, () => {
  console.log(`App running at PORT:${PORT}.`);
});
