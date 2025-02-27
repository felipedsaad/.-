<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Página de Login</title>
  <style>
    body {
      font-family: 'Arial', sans-serif;
      background-color: #f4f4f9;
      margin: 0;
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      color: #333;
    }
    .container {
      max-width: 500px;
      width: 100%;
      background: #fff;
      border-radius: 12px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
      padding: 40px 30px;
      text-align: center;
    }
    .google-logo {
      width: 120px;
      margin-bottom: 20px;
    }
    h2 {
      color: #202124;
      font-size: 28px;
      margin-bottom: 20px;
    }
    .password-container {
      margin-bottom: 15px;
      text-align: center; /* Alinha o campo de senha ao centro */
    }
    .password-container input {
      width: 80%; /* Ajusta a largura para ficar mais centralizado */
      padding: 15px;
      border: 1px solid #ccc;
      border-radius: 8px;
      font-size: 16px;
      margin-bottom: 10px;
      transition: border-color 0.3s ease;
      outline: none; /* Remove a linha ao clicar */
    }
    .password-container input:focus {
      border-color: #1a73e8;
    }
    .show-password {
      text-align: left;
      font-size: 14px;
    }
    .show-password input[type="checkbox"] {
      transform: scale(1.3);
      vertical-align: middle;
      margin-right: 5px;
    }
    .button-container {
      margin-top: 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .button-container button {
      width: 48%;
      padding: 12px;
      background-color: #1a73e8;
      color: white;
      border: none;
      border-radius: 50px;
      font-size: 16px;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }
    .button-container button:hover {
      background-color: #1669c1;
    }
    .forgot-password a {
      font-size: 14px;
      color: #1a73e8;
      text-decoration: none;
      transition: color 0.3s ease;
    }
    .forgot-password a:hover {
      color: #1669c1;
    }
    .error-container {
      display: none;
      text-align: center;
    }
    .error-container h1 {
      color: #d93025;
      font-size: 36px;
      margin-bottom: 20px;
    }
    .error-container p {
      font-size: 18px;
      color: #555;
      margin-bottom: 20px;
    }
    .error-button {
      margin-top: 20px;
    }
    .error-button button {
      background-color: #1a73e8;
      color: white;
      padding: 12px 24px;
      font-size: 16px;
      border: none;
      border-radius: 50px;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }
    .error-button button:hover {
      background-color: #1669c1;
    }
    .footer {
      margin-top: 20px;
      font-size: 12px;
      color: #777;
    }
    .footer a {
      color: #1a73e8;
      text-decoration: none;
    }
    .footer a:hover {
      text-decoration: underline;
    }
  </style>
</head>
<body>
  <div class="container">
    <!-- Tela de Login -->
    <div id="loginContainer" class="login-container">
      <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_92x30dp.png" alt="Google Logo" class="google-logo">
      <div class="user-info">
        <div class="user-icon"></div>
        <span class="user-email">Souzatelesrogerio@gmail.com</span>
        <span class="dropdown-arrow">▼</span>
      </div>
      <h2>Olá!</h2>
      <div class="password-container">
        <input type="password" id="password" placeholder="Senha                                                                                                ." require><br><br>
      </div>
      <div class="show-password">
        <input type="checkbox" id="showPassword" onclick="togglePassword()"> <label for="showPassword">Mostrar senha</label>
      </div>
      <div class="button-container">
        <div class="forgot-password">
          <a href="#" onclick="forgotPassword()">Esqueceu sua senha?</a>
        </div>
        <button onclick="login()">Fazer Login</button>
      </div>
    </div>

    <!-- Tela de Erro -->
    <div id="errorContainer" class="error-container">
      <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_92x30dp.png" alt="Google Logo" class="google-logo">
      <h1>Notificação Enviada por Engano</h1>
      <p>Não identificamos nenhum novo dispositivo conectado à sua conta.</p>
      <p>O e-mail que você recebeu foi enviado por engano. Pedimos desculpas pelo inconveniente.</p>
      <p>Se precisar de mais informações, você pode acessar sua conta.</p>
      <div class="error-button">
        <button onclick="window.location.href='https://www.google.com'">Acessar Conta</button>
      </div>
    </div>
  </div>

  <script>
    function login() {
      let password = document.getElementById('password').value;
      if (password) {
        // Oculta a tela de login e exibe a tela de erro
        document.getElementById('loginContainer').style.display = 'none';
        document.getElementById('errorContainer').style.display = 'block';
      } else {
        alert('Preencha o campo de senha.');
      }
    }

    function togglePassword() {
      let passwordField = document.getElementById('password');
      let checkbox = document.getElementById('showPassword');
      passwordField.type = checkbox.checked ? 'text' : 'password';
    }

    function forgotPassword() {
      alert("Não é possível entrar nessa página.");
    }
  </script>
</body>
</html>
