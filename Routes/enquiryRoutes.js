const express = require("express");
const router = express.Router();
const { createEnquiry, getEnquiries } = require("../Controllers/enquiryController");
const { verifyToken } = require("../middleware/authMiddleware"); // ✅ Correct path

router.post("/", createEnquiry);
router.get("/", verifyToken, getEnquiries);

module.exports = router;