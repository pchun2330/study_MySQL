//const mysql      = require('mysql2');
import mysql from 'mysql2';

const pool = mysql.createPool({
    host     : '127.0.0.1',
    user     : 'tutorial',
    password : '123456789',
    database : 'sql_tutorial',
    connectionLimit: 10,
})
// const connection = mysql.createConnection({
//     host     : '127.0.0.1',
//     user     : 'root',
//     password : 'root123456789',
//     database : 'sql_tutorial'
// });

export default pool;