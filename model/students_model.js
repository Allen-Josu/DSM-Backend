const mongoose = require("mongoose");

const students_schema = new mongoose.Schema({
    sid: {
        type: Number,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    fathers_name: {
        type: String,
        required: true,
    },
    mothers_name: {
        type: String,
        required: true,
    },
    dob: {
        type: Date,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    mobile: {
        type: Number,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    course_selected: {
        type: String,
        required: true,
    },
    total_class: {
        type: Number,
        required: true,
    },
    fees_paid: {
        type: Number,
        required: true,
    },
});

const students_model = mongoose.model("students", students_schema);

module.exports = students_model;
