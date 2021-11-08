const express = require("express");
const router = express.Router();

router.get("/chat", (req, res) => {
  res.send("웹소켓 test");
});

module.exports = router;
