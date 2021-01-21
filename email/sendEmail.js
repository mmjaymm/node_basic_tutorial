var nodemailer = require('nodemailer');

var transport = nodemailer.createTransport({
    host: '10.165.35.105',
    port: 25,
});

var mailOptions = {
    from: 'mit@fujitsu.com',
    to: 'markjay.mercado@fujitsu.com',
    subject: 'Sending Email using Node.js',
    text: '<h1>Welcome</h1><p>That was easy!</p>'
};

transport.sendMail(mailOptions, (error, info) =>
{
    if (error)
    {
        console.log(error);
    }
    else
    {
        console.log('Email send:' + info.response);
    }
});