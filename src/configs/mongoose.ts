import mongoose from "mongoose";

if (!process.env.DBURI) {
  throw new Error("Must especify database URL in .env file.");
}

mongoose
  .connect(process.env.DBURI)
  .then(() => console.log("Connected to database;"))
  .catch((error) => console.log(error));

export default mongoose;

