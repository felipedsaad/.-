import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs';
import { log } from '../src/logger.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.WEB_PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(join(__dirname, 'public')));

// Caminho para messages.json
const messagesPath = join(__dirname, '..', 'config', 'messages.json');

// READ - Obter todas as mensagens
app.get('/api/messages', (req, res) => {
  try {
    const messages = JSON.parse(fs.readFileSync(messagesPath, 'utf-8'));
    res.json(messages);
  } catch (error) {
    log.error('Erro ao ler mensagens:', error);
    res.status(500).json({ error: 'Erro ao carregar mensagens' });
  }
});

// UPDATE - Atualizar mensagens
app.put('/api/messages', (req, res) => {
  try {
    const updatedMessages = req.body;
    fs.writeFileSync(messagesPath, JSON.stringify(updatedMessages, null, 2), 'utf-8');
    
    log.success(`✏️ Mensagens atualizadas via web`);
    log.success(`📍 ${Object.keys(updatedMessages.menus).length} menus configurados`);
    
    res.json({ success: true, message: 'Mensagens atualizadas com sucesso!' });
  } catch (error) {
    log.error('Erro ao atualizar mensagens:', error);
    res.status(500).json({ error: 'Erro ao salvar mensagens' });
  }
});

// UPDATE - Atualizar um menu específico
app.put('/api/messages/menu/:id', (req, res) => {
  try {
    const { id } = req.params;
    const { label, description, response } = req.body;
    
    const messages = JSON.parse(fs.readFileSync(messagesPath, 'utf-8'));
    
    if (!messages.menus[id]) {
      return res.status(404).json({ error: `Menu ${id} não encontrado` });
    }

    messages.menus[id] = {
      label: label || messages.menus[id].label,
      description: description || messages.menus[id].description,
      response: response || messages.menus[id].response
    };

    fs.writeFileSync(messagesPath, JSON.stringify(messages, null, 2), 'utf-8');
    
    log.success(`✏️ Menu ${id} atualizado: ${messages.menus[id].label}`);
    
    res.json({ success: true, message: `Menu ${id} atualizado!` });
  } catch (error) {
    log.error('Erro ao atualizar menu:', error);
    res.status(500).json({ error: 'Erro ao atualizar menu' });
  }
});

// UPDATE - Atualizar mensagem de boas-vindas
app.put('/api/messages/welcome', (req, res) => {
  try {
    const { welcomeMessage, menuIntro } = req.body;
    
    const messages = JSON.parse(fs.readFileSync(messagesPath, 'utf-8'));
    
    if (welcomeMessage) messages.welcomeMessage = welcomeMessage;
    if (menuIntro) messages.menuIntro = menuIntro;

    fs.writeFileSync(messagesPath, JSON.stringify(messages, null, 2), 'utf-8');
    
    log.success(`✏️ Mensagem de boas-vindas atualizada`);
    
    res.json({ success: true, message: 'Boas-vindas atualizado!' });
  } catch (error) {
    log.error('Erro ao atualizar welcome:', error);
    res.status(500).json({ error: 'Erro ao atualizar' });
  }
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'Online', timestamp: new Date().toISOString() });
});

// Servir HTML principal
app.get('/', (req, res) => {
  res.sendFile(join(__dirname, 'views', 'index.html'));
});

// 404
app.use((req, res) => {
  res.status(404).json({ error: 'Rota não encontrada' });
});

// Iniciar servidor
app.listen(PORT, () => {
  log.header(`Painel Web - Porta ${PORT}`);
  log.success(`🌐 Abra no navegador: http://localhost:${PORT}`);
  log.success(`📧 Edite as mensagens em tempo real`);
  log.success(`♻️ Bot recarrega automaticamente`);
});

export { app };
