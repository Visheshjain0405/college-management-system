const Faculty = require('../models/Faculty');

const addFaculty = async (req, res) => {
    const { facultyName, facultyMobileNumber, facultyEmailId, facultyDob, facultyAddress, facultyDepartement, facultySubject, facultyDateOfJoining } = req.body

    if (!facultyName || !facultyMobileNumber || !facultyEmailId || !facultyDob || !facultyAddress || !facultyDepartement || !facultySubject || !facultyDateOfJoining) {
        return res.status(400).json({ msg: 'Please enter all details' });
    }

    try {
        const faculty = new Faculty({
            facultyName,
            facultyMobileNumber,
            facultyEmailId,
            facultyDob,
            facultyAddress,
            facultyDepartement,
            facultySubject,
            facultyDateOfJoining
        })

        await faculty.save();
        res.json(faculty);
    } catch (error) {
        console.log(error);
        res.status(500).send('Server Error');
    }
};

const getFacultyData = async (req, res) => {
    try {
        const faculties = await Faculty.find();
        res.json(faculties);
    } catch (error) {
        console.log(error);
        res.status(500).send('Server Error');
    }
};

module.exports = {
    addFaculty,
    getFacultyData
}