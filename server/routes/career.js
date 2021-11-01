const express = require("express");
const router = express.Router();
const careerController = require("../controllers/career");

router.post("/", careerController.create);
router.delete("/:id", careerController.delete);
router.delete("/", careerController.deleteAll)
router.patch("/", careerController.update);
router.get("/:jobSeekerId", careerController.get);
router.get("/", careerController.getById)

module.exports = router;