var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  host: "smtp.zoho.com",
  port: 465,
  secure: true,
  auth: {
    user: "admin@testnet123.com",
    pass: "Indonesia@1945",
  },
});

var mailOptions = {
  from: "admin@testnet123.com",
  to: "aryejfa@gmail.com",
  subject: "Sending Email using Nodejs",
  text: "That was easy!",
};

transporter.sendMail(mailOptions, (err, info) => {
  if (err) throw err;
  console.log("Email sent: " + info.response);
});
