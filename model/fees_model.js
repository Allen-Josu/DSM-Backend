const mongoose = require("mongoose");

const fees_schema = new mongoose.Schema({
    sid: {
        required: true,
        type: Number,
    },
    fees_purpose: {
        required: true,
        type: String,
    },
    fees_paid: {
        required: true,
        type: Number,
    },
    bill_no: {
        type: String,
        required: true,
    },
});

const fees_model = mongoose.model("fees", fees_schema);

module.exports = fees_model;
