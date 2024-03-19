import { User } from "../models/user.js";

const addUser = async (req, res) => {};

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
