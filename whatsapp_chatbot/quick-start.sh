#!/usr/bin/env bash

# 🤖 Chat Bot - Inicialização Rápida
# Execute: bash quick-start.sh

echo "╔════════════════════════════════════════════════════════════╗"
echo "║     🤖 EMAIL CHATBOT - QUICK START                         ║"
echo "╚════════════════════════════════════════════════════════════╝"

# Cores
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${BLUE}1️⃣  Verificando Node.js...${NC}"
if ! command -v node &> /dev/null; then
    echo -e "${YELLOW}⚠️  Node.js não encontrado! Instale em: https://nodejs.org${NC}"
    exit 1
fi
echo -e "${GREEN}✅ Node.js $(node --version) encontrado${NC}"

echo -e "\n${BLUE}2️⃣  Instalando dependências...${NC}"
npm install || exit 1
echo -e "${GREEN}✅ Dependências instaladas${NC}"

echo -e "\n${BLUE}3️⃣  Verificando .env...${NC}"
if [ ! -f ".env" ]; then
    echo -e "${YELLOW}⚠️  .env não existe, criando a partir de .env.example...${NC}"
    cp .env.example .env 2>/dev/null || {
        echo "❌ Crie o arquivo .env manualmente"
        exit 1
    }
    echo -e "${YELLOW}📝 Edite o arquivo .env com suas credenciais reais!${NC}"
fi
echo -e "${GREEN}✅ .env configurado${NC}"

echo -e "\n${BLUE}4️⃣  Estrutura criada:${NC}"
echo "whatsapp_chatbot/"
echo "├── src/ (Bot)"
echo "│   ├── main.js"
echo "│   └── ..."
echo "├── web/ (Painel Web)"
echo "│   ├── server.js"
echo "│   ├── views/"
echo "│   └── public/"
echo "└── config/"
echo "    └── messages.json ← Edite aqui pelo painel!"

echo -e "\n${BLUE}5️⃣  Próximos passos:${NC}"
echo ""
echo "🤖 TERMINAL 1 - Iniciar o Bot:"
echo -e "   ${YELLOW}npm start${NC}"
echo ""
echo "🌐 TERMINAL 2 - Iniciar Painel Web:"
echo -e "   ${YELLOW}npm run web${NC}"
echo ""
echo "🌍 Depois abra no navegador:"
echo -e "   ${YELLOW}http://localhost:3000${NC}"
echo ""

echo -e "\n${GREEN}╔════════════════════════════════════════════════════════════╗${NC}"
echo -e "${GREEN}║            🎉 Tudo pronto para começar!                    ║${NC}"
echo -e "${GREEN}╚════════════════════════════════════════════════════════════╝${NC}"

echo ""
echo "📚 Documentação:"
echo "   - README.md                         (Visão geral)"
echo "   - WEB_PANEL.md                      (Painel web)"
echo "   - DOCUMENTO_TECNICO_COMPLETO.txt   (Tudo em detalhe)"
echo "   - GITHUB.md                         (Publicar no GitHub)"
echo ""
echo "📞 Suporte: +55 61 8592-1430 (WhatsApp)"
echo ""
