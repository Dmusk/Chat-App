// index.js
import express from "express";
import dotenv from "dotenv";
import { chats } from "./data.js";

const app = express();
dotenv.config();

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.get("/api/chats", (req, res) => {
  res.send(chats);
});

app.get("/api/chats/:id", (req, res) => {
  const chat = chats.find((e) => e.id === req.params.id);
  console.log(chat);
});

const PORT = process.env.PORT || 3000;

app.listen(3000, () => {
  console.log(`Server is Listening on port ${PORT}`);
});
