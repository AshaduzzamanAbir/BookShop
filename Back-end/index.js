import express from "express";
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./db/db.js";
import { getAllBooks } from "./controller/book.controller.js";

const app = express();
console.log("MONGO_URI:", process.env.MONGO_URI);
connectDB();

const PORT = process.env.PORT || 3000;

app.use("/book", getAllBooks);

app.listen(3000, () => {
  console.log(`"Server is running on ${PORT}"`);
});
