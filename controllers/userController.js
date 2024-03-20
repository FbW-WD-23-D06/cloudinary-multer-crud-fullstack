import { User } from "../models/user.js";
import { cloudinary } from "../utils/cloudinary.js";

const addUser = async (req, res) => {
  console.log("test");

  try {
    // uploading image to cloudinary
    const result = await cloudinary.uploader.upload(req.file.path);
    // create new user
    let user = new User({
      name: req.body.name,
      avatar: result.secure_url,
      cloudinary_id: result.public_id,
    });
    await user.save();

    res.json(user);
  } catch (error) {
    console.log(error);
  }
};

const getUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    next(error);
  }
};

const deleteUser = async (req, res) => {
  try {
  } catch (error) {
    next(error);
  }
};

const editUser = async (req, res) => {
  try {
  } catch (error) {}
};

const getUser = async (req, res) => {};
export { addUser, getUsers, deleteUser, editUser, getUser };
