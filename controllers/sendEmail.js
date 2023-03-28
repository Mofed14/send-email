const nodeMailer = require('nodemailer')
const sgMail = require('@sendgrid/mail')

const sendEmailEthereal = async (req, res) => {

    let testAccount = await nodeMailer.createTestAccount();

    const transporter = nodeMailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
        user: 'jamaal.williamson@ethereal.email',
        pass: 'z87BwexCZRMdkD6vWx'
    }
    });
    
    let info = await transporter.sendMail({
        from: '"Fred Foo 👻" <mofed.salah.hana@gmail.com>', // sender address
        to: "mofed.salah.hana2@gmail.com, mofed.s.hana@gmail.com", // list of receivers
        subject: "Hello ✔", // Subject line
        html: "<b>Hello world?</b>", // html body
    })
     res.send(info)
}


const sendEmailSendGrid = async (req, res) => {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)

    const msg = {
        to: 'mofed.s.hana@gmail.com', // Change to your recipient
        from: 'mofed.salah.hana@gmail.com', // Change to your verified sender
        subject: 'Sending with SendGrid is Fun',
        html: '<strong>and easy to do anywhere, even with Node.js</strong>',
      }

    const result = await sgMail.send(msg)

     res.json(result)
}


module.exports = {
    sendEmailEthereal,
    sendEmailSendGrid
}