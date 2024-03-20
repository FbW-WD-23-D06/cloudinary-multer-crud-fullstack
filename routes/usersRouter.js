import express from "express";
import {
  addUser,
  deleteUser,
  editUser,
  getUser,
  getUsers,
} from "../controllers/userController.js";
import { upload } from "../utils/multer.js";

const router = express.Router();

router.route("/").get(getUsers).post(upload.single("image"), addUser);

router.route("/:id").delete(deleteUser).put(editUser).get(getUser);

export default router;
