const express = require("express")
const router = express.Router()
const applicantController = require("../controllers/applicant");

router.post("/", applicantController.post);
router.get("/jobseeker/:jobId", applicantController.getAllJobSeeker);
router.get("/jobseeker", applicantController.getJobSeeker);
router.get("/", applicantController.get);
router.delete("/:id", applicantController.delete);
router.delete("/", applicantController.deleteByInfo)

module.exports = router;