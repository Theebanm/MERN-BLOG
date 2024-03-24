import express from "express";
import { test } from "../controller/userCtrl.js";

const userRoute = express.Router();

userRoute.get("/", test);

export default userRoute;
