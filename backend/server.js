require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const smtpPort = Number(process.env.SMTP_PORT || 587);
const smtpSecure = smtpPort === 465;

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: smtpPort,
    secure: smtpSecure,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
    connectionTimeout: 15000,
    greetingTimeout: 15000,
    socketTimeout: 20000,
    logger: true,
    debug: true,
});

// Health check
app.get('/', (req, res) => {
    res.json({ status: 'Email API is running' });
});

// Send email
app.post('/send-email', async (req, res) => {
    const { email, phone, message } = req.body;
    const fromAddress = process.env.SMTP_USER;
    const subject = 'Query From Website - Updated';

    if (!message) {
        return res.status(400).json({
            error: 'Field "message" is required.',
        });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(fromAddress || '')) {
        return res.status(400).json({ error: 'Invalid SMTP_USER email address.' });
    }

    try {
        const info = await transporter.sendMail({
            from: fromAddress,
            to: process.env.SMTP_USER,
            subject,
            text: `Email: ${email || 'N/A'}\nPhone: ${phone || 'N/A'}\n\n${message}`,
        });

        res.json({ success: true, messageId: info.messageId });
    } catch (err) {
        console.error('Mail error:', {
            code: err.code,
            responseCode: err.responseCode,
            command: err.command,
            message: err.message,
            response: err.response,
        });

        res.status(500).json({
            error: 'Failed to send email.',
            code: err.code,
            responseCode: err.responseCode,
            message: err.message,
        });
    }
});

const PORT = process.env.PORT || 3010;
app.listen(PORT, () => {
    console.log(`Email API running on port ${PORT} (secure=${smtpSecure})`);
});
