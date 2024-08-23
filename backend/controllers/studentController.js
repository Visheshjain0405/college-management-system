const Student = require('../models/Student');

const addStudent = async (req, res) => {
    const { studentId, studentName, studentFatherName, studentMobileNumber, studentEmailId, studentAddress, studentDob, studentCourse, studentDiv } = req.body;

    if (!studentId || !studentName || !studentFatherName || !studentMobileNumber || !studentEmailId || !studentAddress || !studentDob || !studentCourse || !studentDiv) {
        return res.status(400).json({ msg: 'Please enter all details' });
    }

    try {
        const student = new Student({
            studentId,
            studentName,
            studentFatherName,
            studentMobileNumber,
            studentEmailId,
            studentAddress,
            studentDob,
            studentCourse,
            studentDiv
        });

        await student.save();

        res.json(student);
    } catch (error) {
        console.log(error);
        res.status(500).send('Server Error');
    }
};

const getStudentData = async (req, res) => {
    try {
        const students = await Student.find();
        res.json(students);
    } catch (error) {
        console.log(error);
        res.status(500).send('Server Error');
    }
};

const deleteStudentData = async (req, res) => {
    try {
        const { id } = req.params;
        console.log(id)
        const deleteData = await Student.findByIdAndDelete(id);
        if (!deleteData) {
            return res.status(404).json({ message: 'Student not found' });
        }
        res.json({ message: 'Student Data deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

const updateStudentData = async (req, res) => {
    try {
        const { id } = req.params;
        console.log(id);
        const { studentName, studentFatherName, studentMobileNumber, studentEmailId, studentDob, studentAddress, studentCourse, studentDiv } = req.body;

        // Find the student by ID and update with the new data
        const updatedStudent = await Student.findByIdAndUpdate(
            id,
            {
                studentName,
                studentFatherName,
                studentMobileNumber,
                studentEmailId,
                studentDob,
                studentAddress,
                studentCourse,
                studentDiv
            },
            { new: true } // Return the updated document
        );

        if (!updatedStudent) {
            return res.status(404).json({ message: 'Student not found' });
        }

        res.json(updatedStudent);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Server Error' });
    }
};


module.exports = {
    addStudent,
    getStudentData,
    deleteStudentData,
    updateStudentData
};
