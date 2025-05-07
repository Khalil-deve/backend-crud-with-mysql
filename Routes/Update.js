const express = require('express');
const router = express.Router();
const connection = require("../config/database.js");

//Student get route
router.get("/student/edit/:id", (req, res) => {
    let student_id = req.params.id;
    let query = `SELECT * FROM students WHERE student_id = ?`;
    connection.query(query, [student_id], (err, results) => {
        if (err) {
            console.error('Error fetching data:', err);
            return res.status(500).json({ error: 'Database error' });
        }
        console.log('the data of the user is: ', results);
        res.render('studentEdit.ejs', { user: results[0] });
    });
})
//course get route
router.get("/course/edit/:id", (req, res) => {
    let course_id = req.params.id;
    let query = `SELECT * FROM courses WHERE course_id = ?`;
    connection.query(query, [course_id], (err, results) => {
        if (err) {
            console.error('Error fetching data:', err);
            return res.status(500).json({ error: 'Database error' });
        }
        console.log('the data of the user is: ', results);
        res.render('courseEdit.ejs', { user: results[0] });
    });
})

router.get("/enroll/edit/:id", (req, res) => {
    let enrollment_id = req.params.id;
    let query = `SELECT * FROM Enrollments WHERE enrollment_id = ?`;
    connection.query(query, [enrollment_id], (err, results) => {
        if (err) {
            console.error('Error fetching data:', err);
            return res.status(500).json({ error: 'Database error' });
        }
        console.log('the data of the user is: ', results);
        res.render('enrollment.ejs', { user: results[0] });
    });
})

router.post("/update/enroll/:id", (req, res) => {
    let enrollment_id = req.params.id;
    let { grade } = req.body;
    let query = `UPDATE Enrollments SET grade = ? WHERE enrollment_id = ?`;
    const value = [grade, enrollment_id];
    connection.query(query, value , (err, results) => {
        if (err) {
            console.error('Error fetching data:', err);
            return res.status(500).json({ error: 'Database error' });
        }
        console.log('Data fetched successfully:', results);
        console.log('the data of the user is: ', results);
        res.redirect('/show/data');
    });
})

//Course post route
router.post("/update/course/:id", (req, res) => {
    let course_id = req.params.id;
    let { course_name, instructor_name } = req.body;
    let query = `UPDATE courses SET course_name = ?, instructor_name = ? WHERE course_id = ?`;
    const value = [course_name, instructor_name, course_id];
    connection.query(query, value , (err, results) => {
        if (err) {
            console.error('Error fetching data:', err);
            return res.status(500).json({ error: 'Database error' });
        }
        console.log('Data fetched successfully:', results);
        console.log('the data of the user is: ', results);
        res.redirect('/show/data');
    });
})

//student post route
router.post("/update/student/:id", (req, res) => {
    let student_id = req.params.id;
    let { student_name, email } = req.body;
    let query = `UPDATE students SET student_name = ?, email = ? WHERE student_id = ?`;
    const value = [student_name, email, student_id];
    connection.query(query, value , (err, results) => {
        if (err) {
            console.error('Error fetching data:', err);
            return res.status(500).json({ error: 'Database error' });
        }
        console.log('Data fetched successfully:', results);
        console.log('the data of the user is: ', results);
        res.redirect('/show/data');
    });
})

module.exports = router;