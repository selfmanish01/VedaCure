import mongoose from "mongoose";

const medicineSchema = new mongoose.Schema({
  Reference: {
    type: String,
    required: true
  },
  Dose: {
    type: String,
    required: true
  },
  Precaution: {
    type: String,
    required: true
  },
  Name: {
    type: String,
    required: true
  },
  Indications: {
    type: [String], // An array of strings
    required: true
  },
  IndicationsCommonName: {
    type: [String], // An array of strings
    required: true
  }
});

const MedicineModel = mongoose.model('Medicine', medicineSchema);

export default MedicineModel;
