import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "User is required."],
    },
    message: {
      type: String,
      required: [true, "Message is required."],
      minlength: [3, "Message must be at least 3 characters long."],
      maxlength: [140, "Message must be below 140 characters long."],
    },
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", postSchema);
export default Post;
