const mongoose = require('mongoose');

const marksSchema = new mongoose.Schema({
    studentId: Number,
    studentName: String,
    studentCourse: String,
    studentDiv: String,
    marks: {
        type: Map,
        of: Number
    }
});

const Marks = mongoose.model('Marks', marksSchema);

module.exports = Marks;
