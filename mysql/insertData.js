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

    var sql = `INSERT INTO users (username, password) VALUES ('mj', 'mj')`;
    conn.query(sql, (error, result) =>
    {
        if (error) throw error;
        console.log("1 record inserted!");
    });
});