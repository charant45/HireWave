import express from "express";
import authenticated from "../middlewares/authenticated.js";
import { getAdminJobs, getAllJobs, getJobById, postJob } from "../controllers/jobcontroller.js";

const router = express.Router();

router.route("/post").post(authenticated, postJob);
router.route("/get").get(authenticated, getAllJobs);
router.route("/getadminjobs").get(authenticated, getAdminJobs);
router.route("/get/:id").get(authenticated, getJobById);

export default router;

