import User from "../models/user";
import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import {
  INVALID_CREDENTIALS,
  INVALID_PARAMETERS,
  NAME_EXISTS,
} from "../constants/errors";

const registerUser = asyncHandler(async (req: Request, res: Response) => {
  if (!process.env.JWT_SECRET)
    throw new Error("Must especify JWT_SECRET in .env file");

  const { name, password } = req.body;

  if (!name || !password) throw INVALID_PARAMETERS;
  if (await User.exists({ name })) throw NAME_EXISTS;

  const salt = await bcrypt.genSalt();
  const hashedPassword = await bcrypt.hash(password, salt);
  const user = await User.create({ name, hashedPassword });

  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
    expiresIn: "14d",
  });
  res.json({ token });
});

const login = asyncHandler(async (req: Request, res: Response) => {
  if (!process.env.JWT_SECRET)
    throw new Error("Must especify JWT_SECRET in .env file");

  const { name, password } = req.body;

  if (!name || !password) throw INVALID_PARAMETERS;

  const user = await User.findOne({ name });
  if (!user || !user.hashedPassword) throw INVALID_CREDENTIALS;

  if (await bcrypt.compare(password, user.hashedPassword)) {
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "14d",
    });

    res.json({ token });
  } else throw INVALID_CREDENTIALS;
});

export { login, registerUser };
