const express = require("express")
const router = express.Router()
const applicantController = require("../controllers/applicant");

router.post("/", applicantController.post);
router.get("/jobseeker/:jobId", applicantController.getAllJobSeeker);
router.get("/jobseeker/nonmember/:jobId", applicantController.getNoneMemberJobSeeker);
router.get("/jobseeker", applicantController.getJobSeeker);
router.get("/job/:jobSeekerId", applicantController.getAllWaitingJob)
router.get("/job", applicantController.getAllJobResult)
router.get("/", applicantController.get);
router.delete("/", applicantController.delete);
router.delete("/:id", applicantController.deleteById);
router.patch("/", applicantController.reject);
router.patch("/status", applicantController.accept)

module.exports = router;