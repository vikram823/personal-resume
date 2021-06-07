const nodemailer = require("nodemailer")

const sendMailTo = (emailId)=>{
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        requireTLS: true,
        auth: {
            user: "vikramdeshmukh899@gmail.com",
            pass: ""
        }
    })
    
    const mailOptions = {
        from: "vikramdeshmukh899@gmail.com",
        to: emailId,
        subject: "testing",
        text: "testing"
    }
    
    transporter.sendMail(mailOptions, (error, info)=>{
        if(error){
            console.log(error)
        }
        else{
            console.log("email has been sent")
        }
    })
}

module.exports = sendMailTo

