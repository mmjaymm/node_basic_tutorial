var mysql = require('mysql');

var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root'
});

conn.connect((error) =>
{
    if (error) throw error;
    console.log("Connected!!");
});