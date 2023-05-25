import nodemailer from "nodemailer";

export default function (req, res) {
  const transporter = nodemailer.createTransport({
    host: "smtpout.secureserver.net",
    secure: true,
    secureConnection: false, // TLS requires secureConnection to be false
    tls: {
      ciphers: "SSLv3",
    },
    requireTLS: true,
    port: 465,
    auth: {
      user: process.env.MAIL,
      pass: process.env.MAIL_PASS,
    },
  });

  transporter.verify(function (error, success) {
    if (error) {
      console.log("Error in connectingSMTP", error);
      return;
    }
    console.log("EMAIL ACCESSED...");
  });
  const mailData = {
    from: process.env.MAIL,
    to: req.body.email,
    subject: `LEAD GENERATED!!!!! Message From ${req.body.firstName} ${req.body.lastName}`,
    text: `This is client the client queries please check\nClient's Email: ${req.body.email} \nQueries: ${req.body.queries}`,
  };
  console.log("EMAIL DATA ACCESSED...");
  transporter.sendMail(mailData, function (err, info) {
    console.log("EMAIL SENDING...");
    console.log("EMAIL SENT...");
    if (err) console.log("Error in sending email", err);
  });
  res.status(200).send();
}
