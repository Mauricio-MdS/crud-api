import dotenv from "./configs/enviroment";
import app from "./configs/app";
import mongoose from "./configs/mongoose";
import postRouter from "./routes/postRouter";
import express from "express";
import errorHandler from "./middlewares/errorHandler";
import authRouter from "./routes/authRouter";

dotenv;
mongoose;

app.use(express.json());

app.use("/post", postRouter);
app.use("/auth", authRouter);

app.use(errorHandler);
