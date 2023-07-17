import Post from "../models/post";
import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import { INVALID_PARAMETERS, NOT_AUTHORIZED } from "../constants/errors";

const createPost = asyncHandler(async (req: Request, res: Response) => {
  const { message } = req.body;
  if (!message || !req.user) throw INVALID_PARAMETERS;

  const createdPost = await Post.create({ user: req.user._id, message });
  res.status(201).json(createdPost);
});

const readPosts = asyncHandler(async (req: Request, res: Response) => {
  const posts = await Post.find();
  res.json(posts);
});

const updatePost = asyncHandler(async (req: Request, res: Response) => {
  const { message } = req.body;
  if (!message || !req.user) throw INVALID_PARAMETERS;

  const post = await Post.findById(req.params.id);
  if (!post) throw INVALID_PARAMETERS;
  if (post.user?.toString() === req.user._id.toString()) {
    post.message = message;
    const updatedPost = await post.save();
    res.json(updatedPost);
  } else throw NOT_AUTHORIZED;
});

const deletePost = asyncHandler(async (req: Request, res: Response) => {
  if (!req.user) throw INVALID_PARAMETERS;

  const post = await Post.findById(req.params.id);
  if (!post) throw INVALID_PARAMETERS;
  if (post.user?.toString() === req.user._id.toString()) {
    post.deleteOne();
    res.sendStatus(204);
  } else throw NOT_AUTHORIZED;
});

export { createPost, readPosts, updatePost, deletePost };
