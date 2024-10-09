const mongoose = require('mongoose');

const LoanApplicationSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    loanAmount: {
        type: Number,
        required: true,
    },
    courseOfStudy: {
        type: String,
        required: true,
    },
    institutionName: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
});

const LoanApplication = mongoose.model('LoanApplication', LoanApplicationSchema);
module.exports = LoanApplication;
