import express from "express";
import path from 'path';
import sgMail from '@sendgrid/mail'
import * as dotenv from 'dotenv'

dotenv.config()
const app = express();
sgMail.setApiKey(process.env.SENDGRID_API_KEY)
app.use(express.json())

app.use(express.static('app'))

app.get('/', (req, res) => {
    res.sendFile(`${path.resolve()}/index.html`)
    
    // const msg = {
    //     to: 'vinze.gg@gmail.com', // Change to your recipient
    //     from: process.env.FROM, // Change to your verified sender
    //     subject: 'Sending with SendGrid is Fun',
    //     text: 'and easy to do anywhere, even with Node.js',
    //     html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    // }
    // sgMail
    // .send(msg)
    // .then(() => {
    //     console.log('Email sent')
    // })
    // .catch((error) => {
    //     console.error(error)
    // })
})

app.post('/send', (req,res) => {
    console.log(req.body);
    res.status(401).send('Error')
})

app.listen('3000', () => {
    console.log("The App is READY!");
})

