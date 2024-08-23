const Admission = require('../models/AdmissionForm');

const saveAdmissionFormData = async (req, res) => {
    try {
        const newAdmission = new Admission(req.body);
        await newAdmission.save();
        res.status(200).send('Admission form saved successfully');
    } catch (error) {
        res.status(500).send('Error saving admission form');
    }
};

module.exports ={ saveAdmissionFormData }