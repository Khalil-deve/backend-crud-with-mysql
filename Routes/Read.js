const express = require('express');
const router = express.Router();
const connection = require("../config/database.js");

router.get('/show/data', (req, res) => {
    const studentQuery = 'SELECT * FROM Students';
    const courseQuery = 'SELECT * FROM Courses';
    const enrollmentQuery = `
        SELECT 
            e.enrollment_id,
            s.student_id,
            s.student_name,
            s.email,
            c.course_id,
            c.course_name,
            c.instructor_name,
            e.grade
        FROM Enrollments e
        JOIN Students s ON e.student_id = s.student_id
        JOIN Courses c ON e.course_id = c.course_id
    `;

    connection.query(studentQuery, (err, students) => {
        if (err) return res.status(500).json({ error: 'Error fetching students' });

        connection.query(courseQuery, (err, courses) => {
            if (err) return res.status(500).json({ error: 'Error fetching courses' });

            connection.query(enrollmentQuery, (err, enrollments) => {
                if (err) return res.status(500).json({ error: 'Error fetching enrollments' });

                res.render('showData.ejs', { students, courses, enrollments });
            });
        });
    });
});


module.exports = router;