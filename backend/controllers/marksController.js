const Marks = require('../models/Marks');

const addMarks = async (req, res) => {
    const { studentId, studentName, studentCourse, studentDiv, marks } = req.body;

    try {
        const newMarks = new Marks({
            studentId,
            studentName,
            studentCourse,
            studentDiv,
            marks
        });

        await newMarks.save();
        res.status(201).send(newMarks);
    } catch (error) {
        res.status(400).send({ error: 'Failed to save marks' });
    }
};

const viewMarks = async (req, res) => {
    const { rollnumber } = req.params;

    try {
        // Use findOne to search by studentId
        const marks = await Marks.findOne({ studentId: rollnumber });

        if (!marks) {
            return res.status(404).json({ msg: 'Marks not found for this roll number' });
        }

        res.json(marks);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
};

module.exports = { addMarks, viewMarks };