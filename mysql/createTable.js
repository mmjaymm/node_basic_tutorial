var mysql = require('mysql');

var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'mynode'
});

conn.connect((error) =>
{
    if (error) throw error;
    console.log("Connected!!");

    var sql = `CREATE TABLE users 
    (
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        username VARCHAR(255), 
        password VARCHAR(255)
    )`;
    conn.query(sql, (error, result) =>
    {
        if (error) throw error;
        console.log("Table created!!");
    });
});