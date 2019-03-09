const express = require("express");
const router = express.Router();
const job = require("../controllers/job");

router.post("/", job.publish);
router.get("/", job.show);

module.exports = router;
