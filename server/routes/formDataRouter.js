const express = require("express");
const router = express.Router();

const { saveFormData } = require("../controller/formController");

// Endpoint to save form data to the database
router.post("/", saveFormData);

module.exports = router;