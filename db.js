var mysql = require('mysql2/promise');

var dbHost = "127.0.0.1";
var dbUser= "root";
var dbPassword = "";
var dbDatabase= "ubybs23";
const connection = mysql.createPool({
    host: dbHost,
    user: dbUser,
    password: dbPassword,
    database: dbDatabase,
    charset: 'utf8mb4',
    dateStrings: true,
    waitForConnections: true,
    connectionLimit: 100,
    queueLimit: 0});
    module.exports = connection;