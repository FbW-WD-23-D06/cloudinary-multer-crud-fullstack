import express from "express";
import {
  addUser,
  deleteUser,
  editUser,
  getUser,
  getUsers,
} from "../controllers/userController.js";

const router = express.Router();

router.route("/").get(getUsers).post(addUser);

router.route("/:id").delete(deleteUser).put(editUser).get(getUser);

export default router;
