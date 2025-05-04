const express = require('express');
const router = express.Router();
const connection = require("../config/database.js");

router.get('/show/data', (req, res) => {
    const sql = 'SELECT * FROM student';
    connection.query(sql, (err, results) => {
        if (err) {
            console.error('Error fetching data:', err);
            return res.status(500).json({ error: 'Database error' });
        }
        console.log('Data fetched successfully:', results);
        res.render('showData.ejs', { results });
    });

})

module.exports = router;