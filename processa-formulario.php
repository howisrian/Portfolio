<?php
// Verifica se o formulário foi submetido
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Configurações do e-mail
    $para = "riansantos.dev@gmail.com"; // Coloque aqui o e-mail para onde deseja enviar
    $assunto = "Novo contato pelo formulário";
    
    // Coleta os dados do formulário
    $nome = $_POST['nome'];
    $email = $_POST['email'];
    $celular = $_POST['celular'];
    $mensagem = $_POST['mensagem'];
    
    // Monta o corpo do e-mail
    $corpo_email = "Nome: $nome\n";
    $corpo_email .= "Email: $email\n";
    $corpo_email .= "Celular: $celular\n";
    $corpo_email .= "Mensagem: $mensagem\n";
    
    // Envia o e-mail
    if (mail($para, $assunto, $corpo_email)) {
        // Se o e-mail foi enviado com sucesso, redireciona de volta para a página do formulário
        header('Location: /pagina-de-agradecimento.html');
        exit;
    } else {
        // Se houve um erro no envio do e-mail, exibe uma mensagem de erro
        echo "Ocorreu um erro ao enviar o e-mail.";
    }
}

