# 🔧 SETUP - Guia Completo de Configuração

## ⚡ Início Rápido (2 minutos)

### Windows / Mac / Linux

```bash
# 1. Clone o repositório (quando estiver no GitHub)
git clone https://github.com/usuario/whatsapp-chatbot.git
cd whatsapp-chatbot

# 2. Instale dependências
npm install

# 3. Configure credenciais
cp .env.example .env
# Edite .env com suas credenciais reais

# 4. Terminal 1 - Inicie o Bot
npm start

# 5. Terminal 2 - Inicie o Painel Web
npm run web

# 6. Abra no navegador
# http://localhost:3000
```

---

## 📋 Passo a Passo Detalhado

### Pré-requisitos

- ✅ **Node.js 18+** → https://nodejs.org
  - Verifique: `node --version`
- ✅ **Git** → https://git-scm.com
  - Verifique: `git --version`
- ✅ **Conta Gmail** com App Password gerado
- ✅ **API Key do Gemini** → https://ai.google.dev
- ✅ **(Opcional) Conta WhatsApp Business**

### 1️⃣ Preparar Gmail

**Objetivo:** Gerar uma "senha de app" segura

1. Acesse **https://myaccount.google.com/**
2. Clique em **Segurança** (menu esquerdo)
3. Ative **Verificação em 2 etapas** (se não tiver)
4. Volte em **Segurança**
5. Desça até **Senhas de aplicativo**
6. Selecione:
   - Tipo de app: **Email**
   - Tipo de dispositivo: **Windows** (ou seu sistema)
7. Copie a senha gerada (espaços inclusos!)
   - Exemplo: `hxxs ofwr wrgj lvje`

### 2️⃣ Preparar Gemini AI

1. Acesse **https://ai.google.dev**
2. Clique em **"Get API Key"**
3. Clique em **"Get API key in Google Cloud"**
4. Crie/Selecione projeto
5. Copie sua API Key
   - Exemplo: `AIzaSyASf0tVWPcn...`

### 3️⃣ Clonar Repositório

```bash
# Opção A: Com Git (recomendado)
git clone https://github.com/seu-usuario/whatsapp-chatbot.git
cd whatsapp-chatbot

# Opção B: Download ZIP
# 1. Clique em "Code" no GitHub
# 2. Clique em "Download ZIP"
# 3. Descompacte em uma pasta
# 4. Abra terminal nela
```

### 4️⃣ Instalar Dependências

```bash
npm install

# Isso criará a pasta node_modules/ com ~200MB
# Demora 2-3 minutos na primeira vez
```

### 5️⃣ Configurar Variáveis de Ambiente

```bash
# Copie o template
cp .env.example .env

# Edite o .env
# Use seu editor favorito (VS Code, Notepad, etc)
```

**Dentro do .env, altere:**

```env
# 📧 GMAIL CONFIGURATION
GMAIL_USER=fxio0909.2@gmail.com
GMAIL_PASSWORD=hxxs ofwr wrgj lvje         ← Sua App Password
GMAIL_SMTP=smtp.gmail.com
GMAIL_SMTP_PORT=587
GMAIL_IMAP=imap.gmail.com
GMAIL_IMAP_PORT=993

# 🤖 GEMINI AI
GEMINI_API_KEY=AIzaSyASf0tVWPcn6GZSNDXcu8OUcZWmq3crt2s ← Sua API Key

# 📱 WHATSAPP ALERTS
WHATSAPP_MANAGER=+55 61 8592-1430                       ← Seu número
WHATSAPP_API_KEY=sua_whatsapp_api_key_aqui              ← Se usar

# ⚙️ BOT CONFIG
BOT_NAME=ChatBot IA
BOT_EMAIL=fxio0909.2@gmail.com
CHECK_INTERVAL=3000
LOG_LEVEL=info
WEB_PORT=3000
```

⚠️ **IMPORTANTE:** 
- **NUNCA** compart ilhe seu .env
- **NUNCA** faça commit do .env no Git
- Já está em .gitignore, mas verifique!

### 6️⃣ Iniciar o Bot

**Abra um terminal e execute:**

```bash
npm start
```

**Você verá:**
```
────────────────────────────────────────────
  🤖 EMAIL CHATBOT SYSTEM - INICIANDO
────────────────────────────────────────────
✅ Gmail Manager inicializado
✅ Gemini AI conectado
✅ ChatBot pronto
✅ Sistema aguardando emails...
────────────────────────────────────────────
```

### 7️⃣ Iniciar Painel Web

**Abra OUTRO terminal e execute:**

```bash
npm run web
```

**Você verá:**
```
────────────────────────────────────────────
  🤖 PAINEL WEB - PORTA 3000
────────────────────────────────────────────
✅ 🌐 Abra no navegador: http://localhost:3000
✅ 📧 Edite as mensagens em tempo real
✅ ♻️ Bot recarrega automaticamente
────────────────────────────────────────────
```

### 8️⃣ Acessar Painel Web

1. Abra seu navegador
2. Digite: **http://localhost:3000**
3. Você verá a interface estilo WhatsApp

### 9️⃣ Testar

1. Envie um email para **fxio0909.2@gmail.com**
2. Aguarde 10 segundos
3. Bot responderá automaticamente com o menu
4. Responda com um número (1-9)
5. Bot enviará a resposta do menu

---

## 🎯 Interface do Painel Web

```
Painel Web (http://localhost:3000)
│
├─ 📋 Configurações
│  ├─ 👋 Boas-vindas          (Edite mensagem inicial)
│  ├─ 📌 Menus (1-9)          (Edite cada menu)
│  └─ 💬 Outras Mensagens     (Mensagens de erro)
│
└─ ⚙️ Ações
   ├─ 💾 Salvar Tudo          (Salva todas mudanças)
   └─ 🔄 Restaurar Padrão     (Volta ao original)
```

**Como editar um menu:**
1. Clique em "📌 Menus (1-9)"
2. Encontre o menu que quer editar (Menu 1, 2, 3...)
3. Edite: Título, Descrição, Resposta (HTML)
4. Clique "👁️ Preview" para ver como fica
5. Clique "✅ Salvar Menu X"
6. ✅ Pronto! Próximos emails usarão a mensagem nova

---

## 🔄 Fluxo Completo

```
┌─────────────────────────────────────────────────────────┐
│ USUÁRIO                                                  │
│ Envia email para: fxio0909.2@gmail.com                 │
└────────────────┬────────────────────────────────────────┘
                 ↓
┌─────────────────────────────────────────────────────────┐
│ BOT (npm start) - Porta: interno                        │
│ T=0s  Email chega                                       │
│ T=3s  Verifica via IMAP                                │
│ T=4s  Extrai nome + email                              │
│ T=5s  Inicializa rastreamento                          │
│ T=6s  Processa com Gemini AI                           │
│ T=7s  Gera resposta com 9 menus                        │
│ T=8s  Envia via SMTP                                   │
└────────────────┬────────────────────────────────────────┘
                 ↓
┌─────────────────────────────────────────────────────────┐
│ USUÁRIO RECEBE                                          │
│ Email com menu (1-9 opções)                            │
└────────────────┬────────────────────────────────────────┘
                 ↓
┌─────────────────────────────────────────────────────────┐
│ USUÁRIO                                                  │
│ Responde com número (ex: "1")                          │
└────────────────┬────────────────────────────────────────┘
                 ↓
┌─────────────────────────────────────────────────────────┐
│ BOT PROCESSA                                            │
│ Detecta que "1" = Menu 1 (E-Book)                      │
│ Envia detalhes do E-Book                               │
└────────────────┬────────────────────────────────────────┘
                 ↓
┌─────────────────────────────────────────────────────────┐
│ USUÁRIO RECEBE                                          │
│ Email com download do E-Book                           │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│ PAINEL WEB (http://localhost:3000)                     │
│ Você edita as mensagens em tempo real                  │
│ Próximos emails usam as mensagens novas               │
└─────────────────────────────────────────────────────────┘
```

---

## 🆘 Troubleshooting

### ❌ "node: command not found"
→ Node.js não está instalado ou não no PATH
→ Instale em: https://nodejs.org

### ❌ "npm ERR! 404 Not Found"
→ Falta uma dependência
→ Execute: `npm install`

### ❌ "Port 3000 in use"
→ Porta 3000 já está ocupada
→ Execute: `WEB_PORT=3001 npm run web`

### ❌ "IMAP connection error"
→ Credenciais Gmail erradas
→ Verifique: Email, App Password, 2FA ativo

### ❌ "Gemini API key invalid"
→ API Key incorreta
→ Regenere em: https://ai.google.dev

### ❌ "Email não chega resposta"
→ Bot pode estar fora
→ Verifique se `npm start` está rodando
→ Veja se tem erro no console
→ Espere 10 segundos (intervalo de check)

---

## 📁 Estrutura de Pastas

```
whatsapp-chatbot/
│
├─ 📄 Documentação
│  ├─ README.md                    (Visão geral rápida)
│  ├─ SETUP.md                     (Este arquivo)
│  ├─ WEB_PANEL.md                 (Painel web detalhes)
│  ├─ GITHUB.md                    (Publicar no GitHub)
│  └─ DOCUMENTO_TECNICO_COMPLETO   (Full documentation)
│
├─ 🔧 Configuração
│  ├─ .env                         (Credenciais - NUNCA commitar!)
│  ├─ .env.example                 (Template - seguro commitar)
│  ├─ .gitignore                   (Arquivos ignorados pelo Git)
│  ├─ package.json                 (Dependências Node.js)
│  └─ quick-start.sh               (Script de inicialização)
│
├─ 🤖 Bot
│  └─ src/
│     ├─ main.js                   (Orquestrador)
│     ├─ gmail.js                  (IMAP/SMTP)
│     ├─ gemini.js                 (IA)
│     ├─ chatbot.js                (Menus)
│     ├─ tracker.js                (Rastreamento)
│     ├─ whatsapp.js               (Alertas)
│     └─ logger.js                 (Logs)
│
├─ 🌐 Painel Web
│  └─ web/
│     ├─ server.js                 (API Express)
│     ├─ views/
│     │  └─ index.html             (HTML do painel)
│     └─ public/
│        ├─ style.css              (CSS WhatsApp)
│        └─ app.js                 (JavaScript)
│
├─ 📦 Dados
│  └─ config/
│     └─ messages.json             (Mensagens editáveis)
│
└─ 📚 node_modules/                (Dependências - 200MB)
```

---

## 🔐 Segurança

### ✅ Já Protegido
- [x] .gitignore protege .env
- [x] App Password (não senha)
- [x] IMAP/SMTP com SSL/TLS

### ⚠️ A Melhorar
- [ ] Autenticação no painel web
- [ ] HTTPS em produção
- [ ] Rate limiting
- [ ] Validação de inputs

---

## 📞 Suporte

- **Gerente:** +55 61 8592-1430 (WhatsApp)
- **GitHub Issues:** Crie uma issue
- **Email Bot:** fxio0909.2@gmail.com

---

## 📚 Próximos Passos

1. ✅ Bot rodando
2. ✅ Painel web funcionando
3. → Edite as mensagens no painel
4. → Teste com um email real
5. → Publique no GitHub
6. → Deploy online (Replit, Railway, Heroku, etc)

---

**Boa sorte! 🚀**
