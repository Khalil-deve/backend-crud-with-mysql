const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: "openendedlab",
    password: "your password"
});

connection.connect((err) => {
    if (err) throw err;
    console.log('✅ MySQL Connected!');
});

module.exports = connection;