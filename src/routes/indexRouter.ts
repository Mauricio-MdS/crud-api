import express from "express";
import { Request, Response } from "express";

const indexRouter = express.Router();

indexRouter.get("/", (_req: Request, res: Response) => res.send("Hello world"));

export default indexRouter;

