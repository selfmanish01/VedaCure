import mongoose from "mongoose";

const PharmaProp = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  Properties: {
    "Rasa (Taste)": String,
    "Guna (Quality)": String,
    "Veerya (Potency)": String,
    "Vipaka (Post-digestive taste)": String,
   "Prabhava": String,
  },
});

const PharmaPropModel = mongoose.model('PharmaProp', PharmaProp);

export default PharmaPropModel;
