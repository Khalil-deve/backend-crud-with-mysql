const express = require('express');
const router = express.Router();
const connection = require("../config/database.js");

router.get("/data/edit/:id", (req, res) => {
    let registration = req.params.id;
    let query = `SELECT * FROM student WHERE registration = ?`;
    connection.query(query, [registration], (err, results) => {
        if (err) {
            console.error('Error fetching data:', err);
            return res.status(500).json({ error: 'Database error' });
        }
        console.log('the data of the user is: ', results);
        res.render('EditData.ejs', { user: results[0] });
    });
})

router.post("/update/:id", (req, res) => {
    let registration = req.params.id;
    let { firstname, lastname, address, phone, email } = req.body;
    let query = `UPDATE student SET firstname = ?, lastname = ?, address = ?, phone = ?, email = ? WHERE registration = ?`;
    const value = [firstname, lastname, address, phone, email, registration];
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