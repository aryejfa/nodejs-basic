// var fs = require("fs");
// var http = require("http");

// http
//   .createServer(function (request, response) {
//     // baca file
//     fs.readFile("index.html", (err, data) => {
//       if (err) throw err;

//       // kirim respon
//       response.writeHead(200, { "Content-Type": "text/html" });
//       response.write(data);
//       response.end();
//     });
//   })
//   .listen(8000);

// console.log("server running on http://localhost:8000");

// var fs = require("fs");

// //create a file named mynewfile1.txt:
// fs.appendFile("mynewfile1.txt", "Hello dari Petanikode!", function (err) {
//   if (err) throw err;
//   console.log("Saved!");
// });

// var fs = require('fs');

// fs.open('mynewfile2.txt', 'w', function (err, file) {
//   if (err) throw err;
//   console.log('Saved!');
// });

// var fs = require("fs");

// fs.open("mynewfile2.txt", "w+", function (err, file) {
//   if (err) throw err;

//   // kontent yang akan kita tulis ke file
//   let content = "Hello Petanikode!";

//   // tulis konten ke file
//   fs.writeFile(file, content, (err) => {
//     if (err) throw err;
//     console.log("Saved!");
//   });

//   // baca file
//   fs.readFile(file, (err, data) => {
//     if (err) throw err;
//     console.log(data.toString("utf8"));
//   });
// });

// var fs = require("fs");

// fs.rename("mynewfile1.txt", "myrenamedfile.txt", function (err) {
//   if (err) throw err;
//   console.log("File Renamed!");
// });

var fs = require("fs");

fs.unlink("mynewfile2.txt", function (err) {
  if (err) throw err;
  console.log("File deleted!");
});
