import { Users } from "../models/user.js";
import bcrypt from "bcrypt";
import { sendCookie } from "../utils/features.js";

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await Users.findOne({ email }).select("+password");
    if (!user) return next(new ErrorHandler("Email or Password invalid", 500));

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch)
      return next(new ErrorHandler("Email or Password invalid", 500));

    sendCookie(user, res, 200, `Welcome back ${user.name}`);
  } catch (error) {
    next(error);
  }
};

export const register = async (req, res,next) => {
  try {
    const { name, email, password } = req.body;

    let user = await Users.findOne({ email });

    if (user) return next(new ErrorHandler("User already exists", 500));
    else {
      const hashedPassword = await bcrypt.hash(password, 10);

      user = await Users.create({ name, email, password: hashedPassword });

      sendCookie(user, res, 201, "registered successfully");
    }
  } catch (error) {
    next(error);
  }
}; 

export const getMyProfile = (req, res) => {
  res.status(200).json({
    success: true,
    user: req.user,
  });
};

export const logout = (req, res) => {
  res
    .status(200)
    .cookie("token", "", { expires: new Date(Date.now()) })
    .json({
      success: true,
    });
};
