const express = require("express");
const router = express.Router();
const Enquiry = require("../models/Enquiry");

// CREATE ENQUIRY
router.post("/", async (req, res) => {
  try {
    const enquiry = new Enquiry(req.body);
    await enquiry.save();
    res.status(201).json({ message: "Enquiry saved" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
