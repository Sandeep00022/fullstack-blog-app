import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;

  if (
    !username ||
    !email ||
    !password ||
    username === "" ||
    email === "" ||
    password === ""
  ) {
    next(errorHandler(400, "All fields are required"));
  }

  const hashedPassword = bcryptjs.hashSync(password, 10);

  const newUser = new User({
    username,
    email,
    password: hashedPassword,
  });

  try {
    await newUser.save();
    res.json({ message: "Signup  succesful" });
  } catch (error) {
    next(error);
  }
};

export const signin = async (req, res, next) => {
  const { email, password } = req.body;
  console.log(email);

  try {
    // Check if email and password are provided
    if (!email || !password || email.trim() === "" || password.trim() === "") {
      throw errorHandler(400, "All fields are required");
    }

    // Find user by email
    const validUser = await User.findOne({ email });
    console.log("user", validUser);
    // If user not found, return error
    if (!validUser) {
      throw errorHandler(404, "User not found");
    }

    // Check if password is valid
    const validPassword = bcryptjs.compareSync(password, validUser.password);

    if (!validPassword) {
      throw errorHandler(400, "Invalid password");
    }

    // Generate JWT token
    const token = jwt.sign(
      {
        id: validUser._id,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    const { password: pass, ...rest } = validUser._doc;

    // Set token as a cookie and send user data in response
    res
      .status(200)
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .json(rest );
  } catch (error) {
    // Handle errors
    next(error);
  }
};
