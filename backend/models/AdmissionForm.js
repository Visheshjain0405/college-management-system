const mongoose = require('mongoose');

const admissionSchema = new mongoose.Schema({
    fullName: String,
    fatherName: String,
    email: String,
    fatherMobileNumber: String,
    address: String,
    address2: String,
    city: String,
    state: String,
    zip: String,
    course: String,
    profilePic: String,
    signature: String
});

const Admission = mongoose.model('Admission', admissionSchema);

module.exports = Admission;