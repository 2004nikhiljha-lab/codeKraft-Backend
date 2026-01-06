require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const adminRoutes = require("./Routes/adminRoutes");
const enquiryRoutes = require("./Routes/enquiryRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/admin", adminRoutes);
app.use("/api/enquiry", enquiryRoutes);

// Default route
app.get("/", (req, res) => res.send("Backend is running 🚀"));

// Database & Server
const PORT = process.env.PORT || 5000;

if (process.env.MONGO_URI) {
  mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log("MongoDB connected ✅");
      app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    })
    .catch((err) => {
      console.error("MongoDB connection failed ❌");
      console.error(err.message);
      process.exit(1);
    });
} else {
  console.warn("MONGO_URI not set — starting server without DB connection");
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}
