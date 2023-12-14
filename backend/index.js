import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import todoRouter from "./routes/todo.js";
import cors from "cors";

const app = express();
dotenv.config();
const PORT = 4000;

const connect = async () => {
  try {
    await mongoose.connect(process.env.URI);
    console.log("Database Successfully connected");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("MongoDB is disconnected");
});

mongoose.connection.on("connected", () => {
  console.log("MongoDB is connected");
});

// middlewares
app.use(cors());
app.use(express.json());
app.use("/api/todo", todoRouter);

app.listen(PORT, () => {
  connect();
  console.log(`server running at port ${PORT}`);
});
