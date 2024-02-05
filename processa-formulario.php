<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $nome = $_POST["nome"];
  $email = $_POST["email"];
  $celular = $_POST["celular"];
  $mensagem = $_POST["mensagem"];

  // Configurar o e-mail
  $destinatario = "riansantos.dev@gmail.com";
  $assunto = "Nova mensagem do formulário";
  $corpo = "Nome: $nome\nE-mail: $email\nCelular: $celular\nMensagem: $mensagem";

  // Enviar o e-mail
  if (mail($destinatario, $assunto, $corpo)) {
    echo "E-mail enviado com sucesso! Entrarei em contato em breve.";
  } else {
    echo "Ocorreu um erro ao enviar o e-mail. Por favor, tente novamente mais tarde.";
  }

  // Redirecionar o usuário após o envio
  header("Location: obrigado.html");
  exit;
}
?>
