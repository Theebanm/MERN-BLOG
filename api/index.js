import dotenv from "dotenv";
dotenv.config();
import express from "express";
import mongoose from "mongoose";
const app = express();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log(`MongoDB connected `))
  .catch((error) => console.log(error));

app.listen(8393, () => {
  console.log(`Server is Running On 8393`);
});
