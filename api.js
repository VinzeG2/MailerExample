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
})

app.post('/send', async (req,res) => {
    console.log(req.body);
    const {to, subject, html} = req.body

    const msg = {
        to, // Change to your recipient
        from: process.env.FROM, // Change to your verified sender
        subject,
        html,
    }

    try {
        await sgMail.send(msg)
        res.sendStatus(204)    
    } catch (error) {
        console.log("ERROR!! # $&^ ", error);
        const messages = error.response.body.errors.map(e => e.message).join(' ')
        res.status(400).send(messages)
    }   
})

app.listen('3000', () => {
    console.log("The App is READY!");
})

