// var http = require('http');

// http.createServer(function(req, res){

//     res.end("Hello Server!");

// }).listen(8080);

// console.log("server running on http://localhost:8080");

// load semua variabel env dari file .env
require("dotenv").config();

// mencetak variabel env
console.log("HOST: " + process.env.DB_HOST);
console.log("USER: " + process.env.DB_USER);
console.log("PASS: " + process.env.DB_PASS);
console.log("NAME: " + process.env.DB_NAME);
