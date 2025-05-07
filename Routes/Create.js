const express = require('express');
const router = express.Router();
const connection = require("../config/database.js");

//course route
router.post('/form/course', (req, res) => {
    const { course_id, course_name, instructor_name } = req.body;
    console.log("Received data:", req.body);
    console.log("Fetching transport data...");
    res.status(200).json({ message: 'Form submitted successfully!' });
    // Here you can add code to insert the data into the database
    const sql = 'INSERT INTO courses (course_id, course_name, instructor_name) VALUES (?, ?, ?)';
    const values = [course_id, course_name, instructor_name];
    connection.query(sql, values, (err, results) => {
        if (err) {
            console.error('Error inserting data:', err);
            return res.status(500).json({ error: 'Database error' });
        }
        console.log('Data inserted successfully:', results);
    });
})

//Student route
router.post('/form/contact', (req, res) => {
    const { student_id, student_name, email } = req.body;
    console.log("Received data:", req.body);
    console.log("Fetching transport data...");
    res.status(200).json({ message: 'Form submitted successfully!' });
    // Here you can add code to insert the data into the database
    const sql = 'INSERT INTO students (student_id, student_name, email) VALUES (?, ?, ?)';
    const values = [student_id, student_name, email];
    connection.query(sql, values, (err, results) => {
        if (err) {
            console.error('Error inserting data:', err);
            return res.status(500).json({ error: 'Database error' });
        }
        console.log('Data inserted successfully:', results);
    });
})

// Enrollment route
router.post('/form/enrollment', (req, res) => {
    const { enrollment_id, student_id, course_id, grade } = req.body;
    console.log("Received data:", req.body);
    console.log("Fetching transport data...");
    res.status(200).json({ message: 'Form submitted successfully!' });
    // Here you can add code to insert the data into the database
    const sql = 'INSERT INTO enrollments (enrollment_id, student_id, course_id, grade) VALUES (?, ?, ?, ?)';
    const values = [enrollment_id, student_id, course_id, grade];
    connection.query(sql, values, (err, results) => {
        if (err) {
            console.error('Error inserting data:', err);
            return res.status(500).json({ error: 'Database error' });
        }
        console.log('Data inserted successfully:', results);
    });
})

module.exports = router;