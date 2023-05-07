import express from "express";
import "express-async-errors";
import mongoose from "mongoose";
import { postRouter } from "./posts/post-router";

const app = express();

// GLOBAL MIDDLEWARES
app.use(express.json());

// ROUTERS
app.use(postRouter);
// app.use(userRouter);

app.get("/", (req, res) => {
  res.status(200).json("Hello world");
});

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/twitter");
  console.log("Connected to Database");

  app.listen(3000, () =>
    console.log("Server is running on: http://localhost:3000")
  );
}

main().catch(console.error);
