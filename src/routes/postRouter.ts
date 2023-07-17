import express from "express";
import {
  createPost,
  readPosts,
  deletePost,
  updatePost,
} from "../controllers/postController";
import { protect } from "../middlewares/authHandler";

const postRouter = express.Router();

postRouter.route("/").get(readPosts).post(protect, createPost);

postRouter.route("/:id").put(protect, updatePost).delete(protect, deletePost);

export default postRouter;
