const Enquiry = require("../models/Enquiry");

// CREATE ENQUIRY
exports.createEnquiry = async (req, res) => {
  try {
    const enquiry = new Enquiry(req.body);
    await enquiry.save();
    res.status(201).json({ message: "Enquiry submitted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to submit enquiry" });
  }
};

// GET ALL ENQUIRIES (Admin only)
exports.getEnquiries = async (req, res) => {
  try {
    const enquiries = await Enquiry.find().sort({ createdAt: -1 });
    res.json(enquiries);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch enquiries" });
  }
};
