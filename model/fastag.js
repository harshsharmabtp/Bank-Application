const mongoose = require("mongoose");

const fastagSchema = new mongoose.Schema({
    Tag_classes: {
        type: String,
        required: true,
    },
    Description: {
        type: String,
        required: true,
    },
    Tag_Color: {
        type: String,
        required: true,
    },
    Tag_Deposit: {
        type: String,
        required: true,
    },
    Threshold_Amount: {
        type: String,
        required: true,
    },
});

const Fast = mongoose.model("Fast", fastagSchema);
module.exports = Fast;
