import express from "express";
import { Server } from "socket.io";
import { createServer } from "http";
import "dotenv/config";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";

import routes from "./src/routes/index.js";
import authentication from "./src/helper/tokenHandler.js";

const PORT = process.env.PORT || 9999;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(cookieParser());

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

app.get("/check", authentication, (req, res) => {
  res.send("working");
});

app.use("/api", routes);

const server = createServer(app);

server.listen(PORT, () => {
  console.log(`App running at PORT:${PORT}.`);
});
