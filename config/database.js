const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: "openendedlab",
    password: "MySQL_table"
});

connection.connect((err) => {
    if (err) throw err;
    console.log('✅ MySQL Connected!');
});

module.exports = connection;