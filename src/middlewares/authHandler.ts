import { NextFunction, Request, Response } from "express";
import { INVALID_TOKEN, NO_TOKEN } from "../constants/errors";
import jwt, { JwtPayload } from "jsonwebtoken";
import User from "../models/user";
import asyncHandler from "express-async-handler";

const protect = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    if (!process.env.JWT_SECRET)
      throw new Error("Must specify JWT_SECRET in .env file.");
    if (!req.headers.authorization) throw NO_TOKEN;
    if (!req.headers.authorization.startsWith("Bearer ")) throw INVALID_TOKEN;

    const token = req.headers.authorization.split(" ")[1];
    const { userId } = jwt.verify(token, process.env.JWT_SECRET) as JwtPayload;
    const user = await User.findById(userId).select("-hashedPassword");
    if (!user) throw INVALID_TOKEN;
    req.user = user;
    next();
  }
);

export { protect };
