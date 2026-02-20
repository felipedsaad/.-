# 🌐 Painel Web - Editor de Mensagens

## 📱 Interface WhatsApp-style para Editar Respostas do Bot

O painel web permite editar TODAS as mensagens do bot em tempo real, sem precisar modificar código!

## ⚡ Quick Start

### Iniciar o Painel Web

```bash
npm install
npm run web
```

Abra no navegador: **http://localhost:3000**

### Ou execute Bot + Painel Juntos

**Terminal 1 - Bot de Email:**
```bash
npm start
```

**Terminal 2 - Painel Web:**
```bash
npm run web
```

---

## 🎨 Interface

```
┌─────────────────────────────────────────────────────────┐
│  🤖 ChatBot Email | Gerenciador de Mensagens em TR     │
├──────────────┬──────────────────────────────────────────┤
│ 📋 CONFIG    │ 👋 Boas-vindas                           │
│              │                                          │
│ 👋 B-vindas  │ Mensagem de Boas-vindas:                 │
│ 📌 Menus     │ [Bem-vindo! 👋          __________________]
│ 💬 Mensagens │                                          │
│              │ Introdução do Menu:                      │
│ ⚙️ AÇÕES     │ [Escolha uma opção...  __________________]
│              │                                          │
│ 💾 Salvar    │ 📱 Pré-visualização:                    │
│ 🔄 Restaurar │ ┌──────────────────────────┐             │
│              │ │ Bem-vindo! 👋            │             │
│              │ │ Escolha uma opção...     │             │
│              │ └──────────────────────────┘             │
│              │                                          │
│              │ ✅ Salvar Boas-vindas                   │
└──────────────┴──────────────────────────────────────────┘
```

---

## 📌 Tabs Disponíveis

### 1️⃣ **Boas-vindas** 
Edite a mensagem de boas-vindas e o texto do menu
- Boas-vindas: "Bem-vindo! 👋"
- Intro Menu: "Escolha uma opção..."

### 2️⃣ **Menus (1-9)**
Edite título, descrição e resposta de cada menu
- Menu 1: 📕 E-Book
- Menu 2: 🎓 Curso
- Menu 3: 💼 Consultoria
- ... (até 9)

Cada card tem:
- Título (label)
- Descrição
- Resposta (HTML)
- Botão de Save
- Botão de Preview (👁️)

### 3️⃣ **Outras Mensagens**
Mensagens de erro e mensagens padrão

---

## 🔄 Como Funciona a Sincronização

```
┌─────────────────────────────────────────────────┐
│  1. Você edita no Painel Web (Port 3000)        │
│                    ↓                            │
│  2. Clica em "Salvar"                           │
│                    ↓                            │
│  3. API PUT em /api/messages                    │
│                    ↓                            │
│  4. Arquivo config/messages.json é atualizado  │
│                    ↓                            │
│  5. Bot lê o arquivo e usa novas mensagens     │
│                    ↓                            │
│  ✅ Próximos emails já useão mensagens novas   │
└─────────────────────────────────────────────────┘
```

---

## 📁 Estrutura de Arquivos

```
whatsapp_chatbot/
│
├── config/
│   └── messages.json          ← Arquivo editado pelo painel
│
├── web/
│   ├── server.js              ← API Express
│   ├── views/
│   │   └── index.html         ← Painel web
│   └── public/
│       ├── style.css          ← WhatsApp-style CSS
│       └── app.js             ← JavaScript do painel
│
└── src/
    ├── chatbot.js             ← Lê messages.json
    ├── main.js
    └── ...
```

---

## 🔧 API Endpoints

### GET /api/messages
Carrega todas as mensagens

```bash
curl http://localhost:3000/api/messages
```

### PUT /api/messages
Atualiza tudo

```bash
curl -X PUT http://localhost:3000/api/messages \
  -H "Content-Type: application/json" \
  -d @messages.json
```

### PUT /api/messages/welcome
Atualiza boas-vindas

```bash
curl -X PUT http://localhost:3000/api/messages/welcome \
  -H "Content-Type: application/json" \
  -d '{"welcomeMessage":"Oi!","menuIntro":"Escolha:"}'
```

### PUT /api/messages/menu/:id
Atualiza um menu específico

```bash
curl -X PUT http://localhost:3000/api/messages/menu/1 \
  -H "Content-Type: application/json" \
  -d '{"label":"Novo Título","description":"Nova descrição","response":"Nova resposta HTML"}'
```

---

## 🎯 Casos de Uso

### ✏️ Atualizar Nome do Produto (Menu 1)
1. Abra http://localhost:3000
2. Clique em "📌 Menus"
3. Encontre Menu 1 (E-Book)
4. Edite o campo "Título" para "Nova Oferta"
5. Clique "✅ Salvar Menu 1"
6. ✅ Próximos emails receberão a mensagem nova

### 🎨 Mudar Layout de Resposta (HTML)
1. Vá para o Menu desejado
2. Edite o campo "Resposta (HTML)"
3. Preview com o botão 👁️
4. Clique "✅ Salvar"

### 🔄 Restaurar Padrão
1. Clique "🔄 Restaurar Padrão"
2. Confirme
3. Página recarrega com mensagens originais

---

## 📊 Estrutura do messages.json

```json
{
  "welcomeMessage": "Bem-vindo! 👋",
  "menuIntro": "Escolha uma opção...",
  
  "menus": {
    "1": {
      "label": "📕 E-Book",
      "description": "Descrição breve",
      "response": "<h3>HTML da resposta</h3>..."
    },
    "2": { ... },
    ...
    "9": { ... }
  },
  
  "invalidSelectionMessage": "Desculpe, opção inválida...",
  "errorFallbackMessage": "Desculpe, estou com problema..."
}
```

---

## ⚙️ Variáveis de Ambiente

```env
# web/server.js
WEB_PORT=3000  # Porta do painel web (default: 3000)
```

---

## 📱 Responsivo

O painel funciona em:
- 💻 Desktop
- 📱 Tablet
- 📲 Mobile (ajustado para telas pequenas)

---

## 🔐 Segurança

⚠️ **O painel web NÃO tem autenticação por padrão!**

Para produção, adicione:
- Autenticação JWT/OAuth
- .htaccess ou firewall
- HTTPS obrigatório
- Rate limiting

---

## 🐛 Troubleshooting

**Painel não carrega?**
```bash
npm install cors body-parser express
npm run web
```

**Mensagens não atualizam?**
1. Verifique `config/messages.json`
2. Reinicie o bot (`npm start`)
3. Veja o console para erros

**Porta 3000 em uso?**
```bash
WEB_PORT=3001 npm run web
```

---

## 📚 Próximos Passos

- [x] API de edição de mensagens
- [x] Painel web visual
- [ ] Autenticação de admin
- [ ] Histórico de mudanças
- [ ] Backup automático
- [ ] Webhook para sistemas externos

---

**Dúvidas?** Contate o gerente: +55 61 8592-1430
