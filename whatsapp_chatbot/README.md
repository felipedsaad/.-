# 🤖 Email ChatBot com Gemini AI

Chatbot inteligente que processa emails, responde em até 8 segundos com um menu de 9 opções e rastreia todas as interações.

## ⚡ Quick Start

```bash
# 1. Instale dependências
npm install

# 2. Configure credenciais no .env (já está pré-preenchido)
# Editar: GMAIL_USER, GMAIL_PASSWORD, GEMINI_API_KEY, WHATSAPP_MANAGER

# 3. Inicie o bot
npm start

# 4. Envie um email para Fxio0909.2@gmail.com e veja a magia acontecer! ✨
```

## 📋 Fluxo em 8 Segundos

```
T=0s  → Email chega
T=3s  → Bot verifica via IMAP
T=4s  → Extrai nome + email
T=5s  → Inicializa rastreamento
T=6s  → Processa no chatbot
T=7s  → Gera resposta com 9 menus
T=8s  → Envia via SMTP
✅    → Respondido!
```

## 🎯 9 Menus Disponíveis

1. 📕 E-Book "Marketing Digital"
2. 🎓 Curso "JavaScript Avançado"
3. 💼 Consultoria 1:1
4. 🎯 Análise de Concorrentes
5. 🔧 Auditoria Técnica
6. 📊 Plano de Marketing 6 meses
7. 🎁 Cupom Desconto 30%
8. 📞 Contato Direto
9. ❓ Dúvidas Frequentes

## 🔑 Credenciais Já Configuradas

```env
GMAIL_USER=Fxio0909.2@gmail.com
GMAIL_PASSWORD=hxxs ofwr wrgj lvje
GEMINI_API_KEY=AIzaSyASf0tVWPcn6GZSNDXcu8OUcZWmq3crt2s
WHATSAPP_MANAGER=+55 61 8592-1430
```

## 📁 Estrutura

```
src/
├── main.js        → Orquestrador principal
├── gmail.js       → IMAP/SMTP
├── gemini.js      → IA
├── chatbot.js     → Menus
├── tracker.js     → Rastreamento
├── whatsapp.js    → Alertas
└── logger.js      → Logs coloridos
```

## 📖 Documentação Completa

Abra `DOCUMENTO_TECNICO_COMPLETO.txt` para:
- Timeline detalhada
- Integração Gmail (IMAP/SMTP)
- Lógica dos 9 menus
- Rastreamento e análise
- Como gerar App Password
- Troubleshooting

## 🚀 Features

✅ Email IMAP/SMTP automático
✅ IA Gemini integrada
✅ 9 menus customizáveis
✅ Rastreamento em tempo real
✅ Alertas WhatsApp ao gerente
✅ Logs coloridos
✅ Responde em < 10 segundos
✅ Zero intervenção humana necessária

## ⚙️ Modo Desenvolvimento

```bash
npm run dev
# Auto-recarrega quando você salva os arquivos
```

## 🔐 Segurança

- Credenciais isoladas em .env
- IMAP/SMTP com SSL/TLS
- Sem dados sensíveis nos logs
- Graceful error handling
- Testing de ambiente

## 📊 Métricas Disponíveis

- Total de emails processados
- Usuários únicos
- Tempo médio de resposta
- Menu mais popular
- Taxa de conversão

## 📞 Suporte

Gerente: +55 61 8592-1430 (WhatsApp)

---

**Feito com ❤️ em JavaScript/Node.js**
