import dotenv from 'dotenv';
import { GmailManager } from './gmail.js';
import { GeminiAI } from './gemini.js';
import { ChatBot } from './chatbot.js';
import { Tracker } from './tracker.js';
import { WhatsAppManager } from './whatsapp.js';
import { log } from './logger.js';

dotenv.config();

class EmailChatBotSystem {
  constructor() {
    this.gmail = new GmailManager({
      GMAIL_USER: process.env.GMAIL_USER,
      GMAIL_PASSWORD: process.env.GMAIL_PASSWORD,
      GMAIL_IMAP: process.env.GMAIL_IMAP,
      GMAIL_IMAP_PORT: process.env.GMAIL_IMAP_PORT,
      GMAIL_SMTP: process.env.GMAIL_SMTP,
      GMAIL_SMTP_PORT: process.env.GMAIL_SMTP_PORT
    });

    this.gemini = new GeminiAI(process.env.GEMINI_API_KEY);
    this.chatbot = new ChatBot(this.gmail, this.gemini);
    this.tracker = new Tracker();
    this.whatsapp = new WhatsAppManager(
      process.env.WHATSAPP_API_KEY,
      process.env.WHATSAPP_MANAGER
    );

    this.startTime = null;
    this.processingEmails = new Set();
  }

  async start() {
    try {
      log.header('Email ChatBot System - Iniciando');
      log.success('🔐 Gmail Manager inicializado');
      log.success('🤖 Gemini AI conectado');
      log.success('💬 ChatBot pronto');
      log.success('📊 Tracker ativado');

      this.startEmailChecking();
      await this.whatsapp.sendAlert('🚀 ChatBot iniciado e pronto!', 'success');

      log.info('✅ Sistema aguardando emails...');
    } catch (error) {
      log.error('Erro ao iniciar o sistema:', error);
      await this.whatsapp.sendErrorAlert(error, 'System Startup');
      process.exit(1);
    }
  }

  startEmailChecking() {
    setInterval(() => this.checkNewEmails(), process.env.CHECK_INTERVAL || 3000);
  }

  async checkNewEmails() {
    try {
      await this.gmail.checkEmails(async (emailData) => {
        await this.processEmail(emailData);
      });
    } catch (error) {
      log.error('Erro ao verificar emails:', error);
    }
  }

  async processEmail(emailData) {
    const processingKey = `${emailData.from}-${emailData.timestamp}`;

    // Evita processar o mesmo email duas vezes
    if (this.processingEmails.has(processingKey)) {
      return;
    }

    this.processingEmails.add(processingKey);
    this.startTime = Date.now();

    try {
      log.header(`Email Recebido de ${emailData.from}`);

      // T=0s
      const t0 = Date.now();
      log.info(`T=0s: Email chega`);
      this.tracker.recordInteraction(emailData.from, 'email_received', emailData);

      // T=3s - Verifica via IMAP
      await this.delay(3000);
      const t3 = Date.now();
      log.info(`T=${Math.round((t3 - t0) / 1000)}s: Bot verifica via IMAP`);

      // T=4s - Extrai nome + email
      const t4 = Date.now();
      log.info(`T=${Math.round((t4 - t0) / 1000)}s: Extrai nome + email`);
      const userInfo = this.extractUserInfo(emailData.from);

      // T=5s - Inicializa rastreamento
      const t5 = Date.now();
      log.info(`T=${Math.round((t5 - t0) / 1000)}s: Inicializa rastreamento`);
      this.chatbot.setUserState(emailData.from, {
        name: userInfo.name,
        email: emailData.from,
        firstContact: new Date(),
        responses: []
      });

      // T=6s - Processa no chatbot
      const t6 = Date.now();
      log.info(`T=${Math.round((t6 - t0) / 1000)}s: Processa no chatbot`);

      // Verifica se é uma resposta de seleção de menu
      const isMenuResponse = /^\d+$/.test(emailData.text.trim());

      let response;
      let subject;

      if (isMenuResponse) {
        // Usuário respondeu com uma opção
        log.info('📍 Detectado: Resposta de menu');
        response = await this.chatbot.handleUserSelection(
          emailData.from,
          emailData.text.trim()
        );
        subject = response.subject;
      } else {
        // Primeiro contato - mostra menu
        log.info('📍 Detectado: Primeiro contato');
        const gAI = await this.gemini.generateResponse(emailData.text, emailData.from);
        log.success(`🤖 IA respondeu: ${gAI.substring(0, 50)}...`);

        response = {
          subject: `Olá ${userInfo.name}! 👋`,
          html: this.chatbot.getMenuHTML()
        };
        subject = response.subject;
      }

      // T=7s - Gera resposta com 9 menus
      const t7 = Date.now();
      log.info(`T=${Math.round((t7 - t0) / 1000)}s: Gera resposta com 9 menus`);

      // T=8s - Envia via SMTP
      await this.delay(1000);
      const t8 = Date.now();
      log.info(`T=${Math.round((t8 - t0) / 1000)}s: Envia via SMTP`);

      await this.gmail.sendEmail(
        emailData.from,
        subject,
        response.html
      );

      // ✅ Respondido em X segundos!
      const totalTime = Math.round((Date.now() - t0) / 1000);
      log.success(`✅ Respondido em ${totalTime} segundos!`);

      this.tracker.recordInteraction(emailData.from, 'menu_shown', { subject });
      this.processingEmails.delete(processingKey);

      // Notifica gerente
      await this.whatsapp.sendAlert(
        `📧 Email processado em ${totalTime}s\n👤 ${userInfo.name}`,
        'info'
      );
    } catch (error) {
      log.error('Erro ao processar email:', error);
      await this.whatsapp.sendErrorAlert(error, `Email de ${emailData.from}`);
      this.processingEmails.delete(processingKey);
    }
  }

  extractUserInfo(emailString) {
    const emailRegex = /^([^@]+)@/;
    const match = emailString.match(emailRegex);
    const name = match ? match[1].replace(/[._-]/g, ' ') : 'Visitante';

    return {
      name: name.charAt(0).toUpperCase() + name.slice(1),
      email: emailString
    };
  }

  delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async displayStats() {
    setInterval(() => {
      const stats = this.tracker.getStats();
      log.divider();
      log.info('📊 ESTATÍSTICAS DO BOT');
      log.info(`Total de emails: ${stats.totalInteractions}`);
      log.info(`Usuários únicos: ${stats.uniqueUsers}`);
      log.info(`Tempo médio de resposta: ${stats.averageResponseTime}ms`);
      log.divider();
    }, 60000); // A cada minuto
  }

  async shutdown() {
    log.warn('⛔ Encerrando sistema...');
    const report = this.tracker.exportReport();
    log.success('📊 Relatório exportado');
    await this.whatsapp.sendStats(report.summary);
    process.exit(0);
  }
}

// Inicializa o sistema
const system = new EmailChatBotSystem();
system.start();
system.displayStats();

// Graceful shutdown
process.on('SIGINT', () => system.shutdown());
process.on('SIGTERM', () => system.shutdown());

export { EmailChatBotSystem };
