const express = require('express');
const router = express.Router();
const connection = require("../config/database.js");

router.get("/data/delete/:id", (req, res) => {
    let registration = req.params.id;
    let query = `DELETE FROM student WHERE registration = ?`;
    connection.query(query, [registration], (err, results) => {
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