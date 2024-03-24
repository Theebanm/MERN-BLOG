import dotenv from "dotenv";
dotenv.config();
import express from "express";
import mongoose from "mongoose";
const app = express();
import userRoute from "./routes/userRoute.js";
import router from "./routes/authRoute.js";

// middle ware
app.use(express.json());

// user Route
app.use("/api/auth", router);

// connect MongoDB
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log(`MongoDB connected `))
  .catch((error) => console.log(error));

app.listen(8393, () => {
  console.log(`Server is Running On 8393`);
});

// error middleware

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  const stack = err.stack;
  res.status(statusCode).json({
    status: "failed",
    statusCode,
    message,
    stack,
  });
});
