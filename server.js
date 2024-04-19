const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();


app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Rota para enviar o e-mail
app.post('/enviar', async (req, res) => {
    const { nome, email, celular, mensagem } = req.body;

    try {
        // Configurações para o serviço de e-mail
        const transporter = nodemailer.createTransport({
            host: 'outlook.com',
            port: 587,
            secure: false,
            auth: {
                user: 'contato.riansantos@outlook.com',
                pass: 'Cudegorila69' // Senha não deve ser hardcoded
            }
        });

        // Detalhes do e-mail a ser enviado
        const mailOptions = {
            from: 'contato.riansantos@outlook.com',
            to: 'riansantos.dev@gmail.com',
            subject: 'Nova mensagem recebida',
            text: `Nome: ${nome}\nEmail: ${email}\nCelular: ${celular}\n\n${mensagem}`
        };

        // Envia o e-mail
        await transporter.sendMail(mailOptions);
        console.log('Email enviado com sucesso.');
        res.send('Mensagem enviada com sucesso!');
    } catch (error) {
        console.error('Erro ao enviar mensagem:', error);
        res.status(500).send('Erro ao enviar mensagem.');
    }
});

// Define a porta para o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});