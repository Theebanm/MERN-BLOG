import dotenv from "dotenv";
dotenv.config();
import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import { errHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";

// sign in
export const signUp = async (req, res, next) => {
  const { username, email, password } = req.body;

  try {
    if (
      !username ||
      !email ||
      !password ||
      username === "" ||
      email === "" ||
      password === ""
    ) {
      return next(errHandler(400, "All Fields Are Required"));
    }

    const hashedPassword = await bcrypt.hashSync(password, 10);
    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    // save
    await newUser.save();
    res.json({
      data: newUser,
    });
  } catch (error) {
    next(error);
  }
};

// sign in
export const signIn = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    if (!email || !password || email === "" || password === "") {
      next(errHandler(400, "All Fields Are Required"));
    }

    const userFound = await User.findOne({ email });
    if (!userFound) {
      return next(errHandler(404, "User not found."));
    }
    const validPassword = await bcrypt.compareSync(
      password,
      userFound.password
    );
    if (!validPassword) {
      return next(errHandler(400, "Invalid Login credentials."));
    }
    // generate token

    const token = jwt.sign({ id: userFound._id }, process.env.SECRET_KEY, {
      expiresIn: "1d",
    });
    const { password: pass, ...rest } = userFound._doc;
    res
      .status(200)
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .json({
        rest,
      });
  } catch (error) {
    next(error);
  }
};
