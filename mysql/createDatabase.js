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

    conn.query("CREATE DATABASE mynode", (error, result) =>
    {
        if (error) throw error;
        console.log("Database created!!");
    });
});