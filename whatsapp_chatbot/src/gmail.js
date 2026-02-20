import Imap from 'imap';
import nodemailer from 'nodemailer';
import { simpleParser } from 'mailparser';
import { log } from './logger.js';

class GmailManager {
  constructor(config) {
    this.config = config;
    this.imap = null;
    this.transporter = null;
    this.initializeImap();
    this.initializeSmtp();
  }

  initializeImap() {
    this.imap = new Imap({
      user: this.config.GMAIL_USER,
      password: this.config.GMAIL_PASSWORD,
      host: this.config.GMAIL_IMAP,
      port: this.config.GMAIL_IMAP_PORT,
      tls: true,
      tlsOptions: { rejectUnauthorized: false },
      debug: console.log
    });
  }

  initializeSmtp() {
    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: this.config.GMAIL_USER,
        pass: this.config.GMAIL_PASSWORD
      }
    });
  }

  async checkEmails(callback) {
    try {
      this.imap.openBox('INBOX', false, async (err, box) => {
        if (err) {
          log.error('Erro ao abrir INBOX:', err);
          return;
        }

        // Busca emails não lidos
        this.imap.search(['UNSEEN'], async (err, results) => {
          if (err || !results.length) return;

          const f = this.imap.fetch(results, { bodies: '' });
          f.on('message', async (msg, seqno) => {
            const parsed = await simpleParser(msg);
            
            const emailData = {
              from: parsed.from.text,
              subject: parsed.subject,
              text: parsed.text || parsed.html,
              timestamp: new Date(),
              messageId: seqno
            };

            // Marca como lido
            this.imap.addFlags(seqno, ['\\Seen'], () => {});

            callback(emailData);
          });

          f.on('error', (err) => log.error('Erro ao buscar email:', err));
        });
      });
    } catch (error) {
      log.error('Erro em checkEmails:', error);
    }
  }

  async sendEmail(to, subject, html) {
    try {
      const info = await this.transporter.sendMail({
        from: this.config.GMAIL_USER,
        to,
        subject,
        html,
        replyTo: this.config.GMAIL_USER
      });

      log.success(`📧 Email enviado para ${to} (ID: ${info.messageId})`);
      return info;
    } catch (error) {
      log.error('Erro ao enviar email:', error);
      throw error;
    }
  }

  async extractEmailInfo(emailText) {
    const emailRegex = /([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/;
    const match = emailText.match(emailRegex);
    return match ? match[1] : null;
  }

  openConnection() {
    return new Promise((resolve, reject) => {
      this.imap.openBox('INBOX', false, (err, box) => {
        if (err) reject(err);
        else resolve(box);
      });
    });
  }

  closeConnection() {
    if (this.imap) {
      this.imap.closeBox(false, (err) => {
        if (err) log.error('Erro ao fechar conexão:', err);
      });
    }
  }

  startListening(callback) {
    try {
      this.imap.openBox('INBOX', false, () => {
        this.imap.on('mail', () => {
          log.info('📬 Novo email detectado...');
          this.checkEmails(callback);
        });

        log.success('✅ IMAP em escuta...');
      });

      this.imap.openBox('INBOX', false, () => {
        this.imap.on('new', (seqno) => {
          this.checkEmails(callback);
        });
      });

      this.imap.openBox('INBOX', false, (err) => {
        if (!err) this.imap.search(['UNSEEN'], (err, results) => {});
      });
    } catch (error) {
      log.error('Erro ao iniciar listener:', error);
    }
  }
}

export { GmailManager };
