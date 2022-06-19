var http = require("http");
var formidable = require("formidable");
var fs = require("fs");

http
  .createServer(function (req, res) {
    if (req.url == "/fileupload") {
      var form = new formidable.IncomingForm();
      form.parse(req, function (err, fields, files) {
        console.log(files);
        var oldpath = files.filetoupload.filepath;
        var newpath = "./uploads/" + files.filetoupload.originalFilename;
        fs.rename(oldpath, newpath, function (err) {
          if (err) throw err;
          res.write("File uploaded and moved!");
          res.end();
        });
      });
    } else {
      // res.writeHead(200, { "Content-Type": "text/html" });
      // res.write(
      //   '<form action="fileupload" method="post" enctype="multipart/form-data">'
      // );
      // res.write('<input type="file" name="filetoupload"><br>');
      // res.write('<input type="submit">');
      // res.write("</form>");
      // return res.end();
      fs.readFile("form_upload.html", (err, data) => {
        res.writeHead(200, { "Content-Type": "text/html" });
        if (err) throw err;
        res.end(data);
      });
    }
  })
  .listen(8000);
