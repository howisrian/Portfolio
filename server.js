const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();


app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.post('/enviar', async (req, res) => {
    const { nome, email, celular, mensagem } = req.body;

    try {
        const transporter = nodemailer.createTransport({
            host: 'smtp.outlook.com', 
            port: 587,
            secure: false,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        const mailOptions = {
            from: 'contato.riansantos@outlook.com',
            to: 'riansantos.dev@gmail.com',
            subject: 'Nova mensagem recebida',
            text: `Nome: ${nome}\nEmail: ${email}\nCelular: ${celular}\n\n${mensagem}`
        };

        await transporter.sendMail(mailOptions);
        console.log('E-mail enviado com sucesso.');

        // Redireciona para a página principal com um parâmetro de sucesso
        res.redirect('/?success=true');
    } catch (error) {
        console.error('Erro ao enviar mensagem:', error);
        res.status(500).send('Erro ao enviar mensagem.');
    }
});
module.exports = app;
