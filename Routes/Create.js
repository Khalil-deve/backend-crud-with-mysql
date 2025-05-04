const express = require('express');
const router = express.Router();
const connection = require("../config/database.js");


router.post('/form/contact', (req, res) => {
    const { registration, firstname, lastname, address, phone, email } = req.body;
    console.log("Received data:", req.body);
    console.log("Fetching transport data...");
    res.status(200).json({ message: 'Form submitted successfully!' });
    // Here you can add code to insert the data into the database
    const sql = 'INSERT INTO student (registration, firstname, lastname, address, phone, email) VALUES (?, ?, ?, ?, ?, ?)';
    const values = [registration, firstname, lastname, address, phone, email];
    connection.query(sql, values, (err, results) => {
        if (err) {
            console.error('Error inserting data:', err);
            return res.status(500).json({ error: 'Database error' });
        }
        console.log('Data inserted successfully:', results);
    });
})

module.exports = router;