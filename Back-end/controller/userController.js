import UserModel from "../models/user.model.js";
import bcrypt from "bcrypt";

export const signupUser = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;
    const user = await UserModel.findOne({ email });

    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const createUser = new UserModel({
      fullname,
      email,
      password: hashedPassword,
    });
    await createUser.save();
    res.status(201).json({ createUser, message: "User created successfully" });
  } catch (error) {
    console.log("error", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (!isPasswordMatch) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    res.status(200).json({
      message: "Login successful",
      user: {
        _id: user._id,
        fullname: user.fullname,
        email: user.email,
      },
    });
  } catch (error) {
    console.log("error", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};
