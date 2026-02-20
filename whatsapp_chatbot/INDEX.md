# 📖 ÍNDICE DE DOCUMENTAÇÃO

## 🚀 Começar em 2 Minutos

👉 **[SETUP.md](SETUP.md)** ← **COMECE AQUI!**

```bash
npm install
cp .env.example .env  # Edite com suas credenciais
npm start            # Terminal 1 - Bot
npm run web          # Terminal 2 - Painel web
# Abra: http://localhost:3000
```

---

## 📚 Guias por Uso

### 🎯 "Quero usar o bot rápido"
1. [SETUP.md](SETUP.md) ← Configuração passo-a-passo

### 🎨 "Quero editar as mensagens"
1. [WEB_PANEL.md](WEB_PANEL.md) ← Guia do painel web

### 🤓 "Quero entender tudo"
1. [DOCUMENTO_TECNICO_COMPLETO.txt](DOCUMENTO_TECNICO_COMPLETO.txt) ← Mega-documentação

### 📦 "Quero publicar no GitHub"
1. [GITHUB.md](GITHUB.md) ← Como fazer push para GitHub
2. [SETUP.md](SETUP.md) ← Instruções para outros clonarem

### ✅ "Quero saber o que foi criado"
1. [CHECKLIST.md](CHECKLIST.md) ← Tudo que você tem agora

---

## 📄 Todos os Documentos

| Arquivo | Tempo | Descrição |
|---------|-------|-----------|
| **[README.md](README.md)** | 3 min | Visão geral rápida do projeto |
| **[SETUP.md](SETUP.md)** | 15 min | ⭐ Guia completo de configuração |
| **[WEB_PANEL.md](WEB_PANEL.md)** | 10 min | Painel web detalhado |
| **[GITHUB.md](GITHUB.md)** | 10 min | Deploy no GitHub |
| **[CHECKLIST.md](CHECKLIST.md)** | 5 min | Resumo do que foi criado |
| **[DOCUMENTO_TECNICO_COMPLETO.txt](DOCUMENTO_TECNICO_COMPLETO.txt)** | 30 min | Documentação ultra-completa |
| **Este arquivo** | 2 min | Índice de navegação |

---

## 🎯 Fluxograma de Uso

```
┌─────────────────────────────────────┐
│  Você quer:                         │
└────────────┬────────────────────────┘
             │
    ┌────────┴────────┬─────────────┬───────────┐
    │                 │             │           │
    ▼                 ▼             ▼           ▼
 Começar?      Editar           Publicar    Entender
 [SETUP]      Mensagens        [GITHUB]    [TÉCNICO]
              [WEB_PANEL]
```

---

## 🤖 O Que Você Tem

### Bot Automático
- ✅ Recebe emails via IMAP
- ✅ Processa com IA Gemini
- ✅ Responde em 8 segundos
- ✅ 9 menus customizáveis
- ✅ Rastreia interações
- ✅ 100% em JavaScript

### Painel Web
- ✅ Edita mensagens visualmente
- ✅ Estilo WhatsApp
- ✅ Sincroniza automaticamente
- ✅ Responsivo
- ✅ Sem código necessário

---

## 🔥 Quickstart

### Terminal 1 (Bot)
```bash
npm install
npm start
```

### Terminal 2 (Painel Web)
```bash
npm run web
```

### Navegador
```
http://localhost:3000
```

---

## 📁 Estrutura de Pastas

```
whatsapp_chatbot/
│
├─ 📖 Documentação (Leia aqui!)
│  ├─ README.md                  ← Visão geral
│  ├─ SETUP.md                   ← ⭐ COMECE AQUI
│  ├─ WEB_PANEL.md               ← Painel web
│  ├─ GITHUB.md                  ← Github
│  ├─ CHECKLIST.md               ← Checklist
│  └─ DOCUMENTO_TECNICO_...      ← Full docs
│
├─ 🤖 src/ (Bot)
│  ├─ main.js
│  ├─ gmail.js
│  ├─ gemini.js
│  ├─ chatbot.js
│  └─ ...
│
├─ 🌐 web/ (Painel Web)
│  ├─ server.js
│  ├─ views/index.html
│  └─ public/ (CSS, JS)
│
├─ ⚙️ config/ (Dados)
│  └─ messages.json
│
└─ 📦 Configuração
   ├─ package.json
   ├─ .env
   └─ .gitignore
```

---

## 🎓 Aprenda Passo-a-Passo

### Para Iniciante
1. Leia [README.md](README.md) (5 min)
2. Siga [SETUP.md](SETUP.md) (15 min)
3. Teste o bot (5 min)
4. Explore o painel (10 min)

### Para Intermediário
1. Leia [WEB_PANEL.md](WEB_PANEL.md)
2. Modifique os 9 menus
3. Estude o código em `src/`
4. Publique no GitHub conforme [GITHUB.md](GITHUB.md)

### Para Avançado
1. Leia [DOCUMENTO_TECNICO_COMPLETO.txt](DOCUMENTO_TECNICO_COMPLETO.txt)
2. Customize todo o código
3. Adicione novas features
4. Deploy em produção

---

## ⚡ Próximas Ações

### Agora
- [ ] Abra [SETUP.md](SETUP.md)
- [ ] Siga os passos
- [ ] Teste o bot

### Depois
- [ ] Edite os menus no painel
- [ ] Teste com email real
- [ ] Publique no GitHub

### Futuro
- [ ] Customize conforme precisa
- [ ] Deploy online
- [ ] Amplifique features

---

## 🔍 Navegação Rápida

```
Clique nas seções abaixo para ir direto:
│
├─ Preciso começar agora
│  └─> [SETUP.md](SETUP.md)
│
├─ Preciso editar mensagens
│  └─> [WEB_PANEL.md](WEB_PANEL.md)
│
├─ Preciso publicar no GitHub
│  └─> [GITHUB.md](GITHUB.md)
│
├─ Preciso entender tudo
│  └─> [DOCUMENTO_TECNICO_COMPLETO.txt](DOCUMENTO_TECNICO_COMPLETO.txt)
│
├─ Preciso saber o que tenho
│  └─> [CHECKLIST.md](CHECKLIST.md)
│
└─ Preciso visão geral (rápida)
   └─> [README.md](README.md)
```

---

## 💡 Dicas Importantes

1. **Leia o SETUP.md primeiro** - Tem tudo passo-a-passo
2. **Use dois terminais** - Um pro bot, outro pro painel web
3. **Edite .env com suas credenciais** - Não comita no Git!
4. **Teste com email real** - Envia pro bot ver funcionando

---

## 📞 Suporte

- **WhatsApp:** +55 61 8592-1430
- **Email Bot:** fxio0909.2@gmail.com (para testes)
- **Documentação:** Todos os .md files

---

## ✅ Checklist Rápido

- [ ] Tenho Node.js instalado
- [ ] Tenho as credenciais (Gmail, Gemini)
- [ ] Rodei `npm install`
- [ ] Configurei `.env`
- [ ] Testei `npm start`
- [ ] Abri painel em localhost:3000
- [ ] Enviei um email para testar

---

## 🎯 Você Está Aqui

```
📍 Lendo este arquivo
  ↓
👉 Vá para SETUP.md
  ↓
✅ Tudo funcionando!
```

---

**🚀 Vá para [SETUP.md](SETUP.md) agora!**

Ou escolha um dos outros guias acima conforme sua necessidade.
