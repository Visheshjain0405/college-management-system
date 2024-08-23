const mongoose = require('mongoose');

//Student schema
const StudentSchema = new mongoose.Schema({
    studentId:{
        type:String,
        require:true,
    },
    studentName: {
        type: String,
        require: true,
    },
    studentFatherName: {
        type: String,
        require: true,
    },
    studentMobileNumber: {
        type: String,
        require: true,
    },
    studentEmailId: {
        type: String,
        require: true,
    },
    studentAddress: {
        type: String,
        require: true,
    },
    studentDob: {
        type: String,
        require: true,
    },
    studentCourse: {
        type: String,
        require: true,
    },
    studentDiv: {
        type: String,
        require: true,
    },
    uploadDate: {
        type: Date,
        default: Date.now
    }
})

const Student = mongoose.model('Student', StudentSchema);

module.exports = Student
