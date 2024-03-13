const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/enviar', (req, res) => {
    const nome = req.body.nome;
    const email = req.body.email;
    const celular = req.body.celular;
    const mensagem = req.body.mensagem;

    // Configurações para o serviço de e-mail
    const transporter = nodemailer.createTransport({
        service: 'outlook',
        auth: {
            user: 'contato.riansantos@outlook.com', // Insira seu e-mail Gmail aqui
            pass: 'Cudegorila69' // Insira sua senha do e-mail aqui
        }
    });

    // Detalhes do e-mail a ser enviado
    const mailOptions = {
        from: 'contato.riansantos@outlook.com', // Seu e-mail
        to: 'riansantos.dev@gmail.com', // E-mail para onde deseja enviar a mensagem (pode ser o mesmo que o remetente)
        subject: 'Nova mensagem recebida',
        text: `Nome: ${nome}\nEmail: ${email}\nCelular: ${celular}\n\n${mensagem}`
    };

    // Envia o e-mail
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
            res.send('Erro ao enviar mensagem.');
        } else {
            console.log('Email enviado: ' + info.response);
            res.send('Mensagem enviada com sucesso!');
        }
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});