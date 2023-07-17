import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required."],
      unique: [true, "Name must be unique."],
      minlength: [3, "Name must be at least 3 characters long."],
      maxlength: [30, "Name must be below 30 characters long."],
    },
    hashedPassword: {
      type: String,
      required: [true, "Password error."],
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
