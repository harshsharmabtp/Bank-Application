const mongoose = require('mongoose');
const formSchema = new mongoose.Schema({
    email: { type: String, required: true },
    vehicleClass: { type: String, required: true },
    date: { type: Date, required: true },
    regNumber: { type: String, required: true },
    rfidNumber: { type: String, required: true },
    cardNumber: { type: String, required: true },
    merchantName: { type: String, required: true },
    amount: { type: Number, required: true },
});

const Fastpays = mongoose.model("Fastpays",formSchema);
module.exports = Fastpays;