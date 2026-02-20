# 📦 Publicar no GitHub

## 🚀 Passos para Hospedar o Projeto

### 1️⃣ Criar Repositório no GitHub

```bash
# Inicialize Git (se não estiver já)
cd "c:\Users\fr222\OneDrive\Desktop\Nova pasta (2)\whatsapp_chatbot"
git init

# Configure seu usuário Git
git config user.name "Seu Nome"
git config user.email "seu@email.com"
```

### 2️⃣ Adicione Arquivos ao Git

```bash
# Adicione tudo exceto .env e node_modules (já no .gitignore)
git add .

# Verifique o que será enviado
git status
```

**Deve ignorar:**
- ❌ `.env` (credenciais sensíveis!)
- ❌ `node_modules/` (reclonado com npm install)
- ❌ `*.log`

### 3️⃣ Criar Repositório no GitHub.com

1. Vá para https://github.com/new
2. Nome: `whatsapp-chatbot`
3. Descrição: "Chatbot inteligente via Email com Painel Web"
4. Escolha **Private** (🔒) por segurança
5. Clique "Create Repository"

### 4️⃣ Conectar Repositório Local ao GitHub

```bash
# Adicione o repositório remoto
git remote add origin https://github.com/SEU_USER/whatsapp-chatbot.git

# Renomeie branch se necessário
git branch -M main

# Faça o primeiro commit
git commit -m "🚀 Initial commit: ChatBot with Web Panel"

# Envie para GitHub
git push -u origin main
```

### 5️⃣ Proteja as Credenciais

**Crie um arquivo `.env.example`** com estrutura sem valores reais:

```bash
# Copie o .env
cp .env .env.example

# Edite .env.example manualmente
```

**Conteúdo de .env.example:**
```env
# .env.example - NUNCA commitar com valores reais!

# 📧 GMAIL CONFIGURATION
GMAIL_USER=seu_email@gmail.com
GMAIL_PASSWORD=sua_app_password_aqui
GMAIL_SMTP=smtp.gmail.com
GMAIL_SMTP_PORT=587
GMAIL_IMAP=imap.gmail.com
GMAIL_IMAP_PORT=993

# 🤖 GEMINI AI
GEMINI_API_KEY=sua_api_key_aqui

# 📱 WHATSAPP ALERTS
WHATSAPP_MANAGER=+55 61 8592-1430
WHATSAPP_API_KEY=sua_whatsapp_api_key_aqui

# ⚙️ BOT CONFIG
BOT_NAME=ChatBot IA
BOT_EMAIL=seu_email@gmail.com
CHECK_INTERVAL=3000
LOG_LEVEL=info
WEB_PORT=3000
```

**Depois faça commit:**
```bash
git add .env.example
git commit -m "📝 Add environment variables template"
git push
```

---

## 📖 Instruções para Usuários Clonar

Crie um arquivo [SETUP.md](SETUP.md):

```markdown
# 🔧 Configurar Localmente

## Pré-requisitos
- Node.js 18+
- Git
- Conta Gmail com App Password

## Passos

1. **Clone o repositório**
   \`\`\`bash
   git clone https://github.com/SEU_USER/whatsapp-chatbot.git
   cd whatsapp-chatbot
   \`\`\`

2. **Instale as dependências**
   \`\`\`bash
   npm install
   \`\`\`

3. **Configure variáveis de ambiente**
   \`\`\`bash
   # Copie o template
   cp .env.example .env
   
   # Edite com SUS credenciais reais
   # .env
   GMAIL_USER=seu@email.com
   GMAIL_PASSWORD=sua_app_password
   GEMINI_API_KEY=sua_api_key
   \`\`\`

4. **Inicie o Bot**
   \`\`\`bash
   npm start
   \`\`\`

5. **Abra o Painel Web** (em outro terminal)
   \`\`\`bash
   npm run web
   \`\`\`

6. **Acesse**
   - Bot: rodando em background
   - Painel: http://localhost:3000

---

## 📚 Documentação

- [README.md](README.md) - Visão geral rápida
- [DOCUMENTO_TECNICO_COMPLETO.txt](DOCUMENTO_TECNICO_COMPLETO.txt) - Documentação técnica completa
- [WEB_PANEL.md](WEB_PANEL.md) - Guia do painel web

---

## 🔐 IMPORTANTE: Credenciais

**NUNCA commite seu `.env`** com credenciais reais em repositórios públicos!

Se por acaso:
1. Revogue a API Key do Gemini imediatamente
2. Regenere App Password do Gmail
3. Mude a senha do WhatsApp
4. Faça check de commits: `git log`
5. Remova arquivo do histórico:
   \`\`\`bash
   git rm --cached .env
   git commit -m "Remove .env from tracking"
   git push
   \`\`\`
```

---

## 📊 Estrutura No GitHub

```
whatsapp-chatbot/
├── README.md                          ← Visão geral
├── SETUP.md                           ← Como configurar
├── WEB_PANEL.md                       ← Painel web
├── DOCUMENTO_TECNICO_COMPLETO.txt    ← Documentação completa
├── .env.example                       ← Template (sem valores reais!)
├── .gitignore                         ← Ignora sensíveis
├── package.json
├── config/
│   └── messages.json
├── src/
│   ├── main.js
│   ├── gmail.js
│   ├── gemini.js
│   ├── chatbot.js
│   ├── tracker.js
│   ├── whatsapp.js
│   └── logger.js
└── web/
    ├── server.js
    ├── views/
    │   └── index.html
    └── public/
        ├── style.css
        └── app.js
```

---

## 🔒 GitHub Settings Recomendado

1. **Settings → Security**
   - ✅ Require branches to be up to date before merging
   - ✅ Dismiss stale pull requests

2. **Settings → Secrets**
   - Adicione as variáveis sensíveis como GitHub Secrets (para CI/CD futura)

3. **Settings → Collaborators**
   - Adicione outros usuários se necessário

---

## 🚢 Deploy (Opcional)

Se quiser hospedar o bot online:

### Opção 1: Replit
```bash
# Faça fork do repositório no Replit
# Configure .env no Replit
# Clique "Run"
```

### Opção 2: Heroku
```bash
heroku create seu-chatbot
git push heroku main
heroku config:set GMAIL_USER=seu@email.com
# ... mais variáveis
```

### Opção 3: Railway
- Conecte ao GitHub
- Configure variáveis de ambiente
- Deploy automático em cada push

---

## 📝 Commits Bons

```bash
# ✅ BOM
git commit -m "🤖 Add Gemini AI integration"
git commit -m "🌐 Create web panel with Express"
git commit -m "📨 Fix email parsing bug"

# ❌ RUIM
git commit -m "updates"
git commit -m "fix"
git commit -m "asjdhasjd"
```

---

## 🔄 Workflow Recomendado

```bash
# 1. Fazer mudanças
# ... editar arquivos ...

# 2. Testar localmente
npm start
npm run web

# 3. Adicionar e commitar
git add .
git commit -m "📦 Feature: Adicionar novo menu"

# 4. Enviar para GitHub
git push origin main

# 5. Se estiver online, auto-deploy!
```

---

## 📞 Suporte

- Gerente: +55 61 8592-1430 (WhatsApp)
- Issues: Crie um GitHub Issue
- Discussions: Use a aba Discussions

---

**Manutenha o código seguro! 🔒**
