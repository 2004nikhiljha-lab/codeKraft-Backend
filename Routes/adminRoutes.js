const express = require("express");
const router = express.Router();
const { loginAdmin, registerAdmin } = require("../Controllers/adminController");

// Register admin (use once to create admin, then remove/comment out)
router.post("/register", registerAdmin);

// Admin login route
router.post("/login", loginAdmin);

module.exports = router;