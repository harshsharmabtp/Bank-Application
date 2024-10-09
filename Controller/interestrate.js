// interestrate.js (Controller)
const InterestRate = require('../model/interestrate'); // Import the InterestRate model

// Controller to get all interest rates from MongoDB
exports.getUserData = async (req, res) => {
  try {
    // Fetch all interest rates from MongoDB
    const rates = await InterestRate.find();

    // If no interest rates are found, return a 404 status
    if (!rates || rates.length === 0) {
      return res.status(404).json({ message: 'No interest rates found' });
    }

    // Send the list of interest rates as a JSON response
    res.json(rates);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
