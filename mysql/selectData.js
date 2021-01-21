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

    var sql = `SELECT * FROM users`;
    conn.query(sql, (error, result, fields) =>
    {
        if (error) throw error;
        console.log(result);
    });
});