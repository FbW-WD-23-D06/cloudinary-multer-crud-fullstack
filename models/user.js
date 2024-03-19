import mongoose from "mongoose";

const { Schema, model } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
  },
  avatar: {
    type: String,
  },
  cloudinary_id: {
    type: String,
  },
});

export const User = model("user", userSchema);
