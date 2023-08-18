const FormDataModel = require("../models/formDataModel");

// Controller function to handle saving form data to the database where it took two parameters: req (request) and res (response).
const saveFormData = async (req, res) => {
  const formData = new FormDataModel({
    ...req.body,
  });

  try {
    await formData.save();
    res.status(201).json({ message: "Form data saved successfully!", form: formData });
  } catch (error) {
    console.error("Error saving form data:", error);
    res.status(500).json({ error: "Failed to save form data." });
  }
};

module.exports = {
  saveFormData,
};