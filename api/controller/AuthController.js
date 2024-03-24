import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import { errHandler } from "../utils/error.js";
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
      next(errHandler(400, "All Fields Are Required"));
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
