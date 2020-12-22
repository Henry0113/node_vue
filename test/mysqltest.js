const mysql = require('mysql');

const connection = mysql.createConnection({
    host : '127.0.0.1',
    user : 'root',
    password : 'password',
    database : 'mysql'
});

connection.connect();

connection.query('select * from db', function (error, results, fields){
    if (error) throw error;
    console.log('first data is: ', results[0]);
});

connection.end();

