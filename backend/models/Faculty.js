const mongoose = require('mongoose');

const FacultySchema = new mongoose.Schema({
    facultyName: {
        type: String,
        required: true,
    },
    facultyMobileNumber: {
        type: String,
        required: true,
    },
    facultyEmailId: {
        type: String,
        required: true,
    },
    facultyDob: {
        type: String,
        required: true,
    },
    facultyAddress: {
        type: String,
        required: true,
    },
    facultyDepartement: {
        type: String,
        required: true,
    },
    facultySubject: {
        type: String,
        required: true,
    },
    facultyDateOfJoining: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
})

const Faculty = mongoose.model('Faculty', FacultySchema);

module.exports = Faculty