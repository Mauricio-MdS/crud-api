import express from "express";
import { login, registerUser } from "../controllers/authController";

const authRouter = express.Router();

authRouter.post("/login", login);
authRouter.post("/register", registerUser);

export default authRouter;
