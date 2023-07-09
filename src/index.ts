import dotenv from "./configs/enviroment";
import app from "./configs/app";
import indexRouter from "./routes/indexRouter";
import mongoose from "./configs/mongoose";

dotenv;
mongoose;

app.use("/", indexRouter);
