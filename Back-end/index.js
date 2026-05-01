import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import connectDB from "./db/db.js";
import bookRoutes from "./routes/book.route.js";
import userRouter from "./routes/user.route.js";

dotenv.config();

const app = express();

// MUST be first
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
  }),
);

app.use(express.json());

connectDB();

// ✅ FIXED
app.use("/book", bookRoutes);
// MUST be correct

app.use("/user", userRouter);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
