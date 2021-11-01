const express = require("express")
const router = express.Router()
const applicantController = require("../controllers/applicant");

router.post("/", applicantController.post);
router.get("/jobseeker/:jobId", applicantController.getAllJobSeeker);
router.get("/jobseeker", applicantController.getJobSeeker);
router.get("/job/:jobSeekerId", applicantController.getAllJob)
router.get("/", applicantController.get);
router.delete("/", applicantController.delete);

module.exports = router;