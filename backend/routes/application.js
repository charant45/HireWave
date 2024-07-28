import express from "express";
import authenticated from "../middlewares/authenticated.js";
import { applyJob, getApplicants, getAppliedJobs, updateStatus } from "../controllers/applicationcontroller.js";

const router = express.Router();

router.route("/apply/:id").get(authenticated, applyJob);
router.route("/get").get(authenticated, getAppliedJobs);
router.route("/:id/applicants").get(authenticated, getApplicants);
router.route("/status/:id/update").post(authenticated, updateStatus);


export default router;

