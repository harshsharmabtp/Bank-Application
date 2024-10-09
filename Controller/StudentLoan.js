const LoanApplication = require('../model/StudentLoanModel');
const store = process.env.MONGODB_URL2

const StudentLoan = async (req, res) => {
    try {
        console.log("Received body:", req.body);
        
        // Destructure fields from the request body
        const { FullName, Email, Loan_Amount, Course_of_Study, Institution_Name, location } = req.body;

        // Validate that all fields are filled
        if (!FullName || !Email || !Loan_Amount || !Course_of_Study || !Institution_Name || !location) {
            return res.status(400).json({ message: "All fields are required." });
        }

        // Create a new loan application object
        const application = new LoanApplication({
            fullName: FullName,
            email: Email,
            loanAmount: Loan_Amount,
            courseOfStudy: Course_of_Study,
            institutionName: Institution_Name,
            location: location,
        });

        // Save to the database
        await application.save();

        // If successful, return a success message
        res.status(201).json({ message: "Data inserted successfully!" });
    } catch (error) {
        console.error("Error while processing student data:", error); // Log the error
        res.status(500).json({ message: "Student Data can't be processed", error: error.message });
    }
};

module.exports = { StudentLoan };
