const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const { addStudent, getStudentData, deleteStudentData, updateStudentData } = require('./controllers/studentController');
const { addFaculty, getFacultyData } = require('./controllers/facultyController');
const { addMarks,viewMarks } = require('./controllers/marksController');
const {saveAdmissionFormData}=require('./controllers/admissionController');
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connect to database
connectDB();

// Use routes
app.post('/api/addstudent', addStudent);
app.post('/api/addfaculty', addFaculty);
app.get('/api/getstudentdata', getStudentData);
app.delete('/api/deletestudentdata/:id', deleteStudentData);
app.get('/api/getfacultydata', getFacultyData);
app.put('/api/updatestudentdata/:id', updateStudentData);
app.post('/api/addmarks', addMarks);
app.get('/api/viewmarks/:rollnumber', viewMarks);
app.post('/api/admissionformdata',saveAdmissionFormData);
const PORT = 8080;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
