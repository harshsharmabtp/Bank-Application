const Fast = require("../model/fastag");

exports.get_data = async (req, res) => {
    try {
        const checker = await Fast.find(); // Fetch all documents from the Fast collection
        if (!checker || checker.length === 0) {
            return res.status(404).json({ message: 'No interest rates found' });
          } // Return data along with the success message
        res.json(checker)
    } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(500).json({ message: "Data Not Fetched", error: error.message });
    }
};
