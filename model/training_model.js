const mongoose = require("mongoose");

const training_schema = new mongoose.Schema({
    training_ID: {
        required: true,
        type: String,
    },
    trainer: {
        required: true,
        type: String,
    },
    vehicle: {
        required: true,
        type: String,
    },
    date: {
        required: true,
        type: Date,
    },
    students: {
        required: true,
        type: Array,
    },
});

const training_model = mongoose.model("training", training_schema);

module.exports = training_model;
