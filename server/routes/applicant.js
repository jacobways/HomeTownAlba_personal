const express = require("express")
const router = express.Router()
const applicantController = require("../controllers/applicant");

router.post("/", applicantController.post);
router.get("/:jobId", applicantController.getAll);
router.get("/", applicantController.get);
router.delete("/:id", applicantController.delete);

module.exports = router;