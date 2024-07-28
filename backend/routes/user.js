import express from "express";
import { login, logout, register, updateProfile } from "../controllers/usercontroller.js";
import authenticated from "../middlewares/authenticated.js";
import { singleUpload } from "../middlewares/mutler.js";

const router = express.Router();

router.route("/register").post(singleUpload,register);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/profile/update").post(authenticated,singleUpload,updateProfile);

export default router;

