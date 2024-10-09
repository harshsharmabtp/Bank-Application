// interestrate.js (Model)
const mongoose = require('mongoose');

// Define the Interest Rate schema
const interestRateSchema = new mongoose.Schema({
  Saving_Balance: { type: String, required: true },
  ROI: { type: Number, required: true },
});

// Create a model from the schema
const InterestRate = mongoose.model('InterestRate', interestRateSchema);

module.exports = InterestRate;
