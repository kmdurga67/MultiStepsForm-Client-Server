const mongoose = require("mongoose");

const formDataSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  age: { type: Number, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  postalCode: { type: String, required: true },
  agree: { type: Boolean, required: true },
  hobbies: [String],
  gender: { type: String, required: true },
  graduation: { type: String, required: true },
  alternatemobile: { type: String },
  country: { type: String, required: true },
  state: { type: String, required: true },
  profile: { type: String, required: true }, // Storing blob URL in the profile variable
});

const FormDataModel = mongoose.model("FormData", formDataSchema);

module.exports = FormDataModel;