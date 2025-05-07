const express = require('express');
const router = express.Router();
const connection = require("../config/database.js");

router.get("/student/delete/:id", (req, res) => {
    let student_id = req.params.id;
    let query = `DELETE FROM students WHERE student_id = ?`;
    connection.query(query, [student_id], (err, results) => {
        if (err) {
            console.error('Error fetching data:', err);
            return res.status(500).json({ error: 'Database error' });
        }
        console.log('Data fetched successfully:', results);
        console.log('the data of the user is: ', results);
        res.redirect('/show/data');
    });
})

router.get("/course/delete/:id", (req, res) => {
    let course_id = req.params.id;
    let query = `DELETE FROM courses WHERE course_id = ?`;
    connection.query(query, [course_id], (err, results) => {
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