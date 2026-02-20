import axios from 'axios';
import { log } from './logger.js';

class WhatsAppManager {
  constructor(apiKey, managerPhone) {
    this.apiKey = apiKey;
    this.managerPhone = managerPhone;
    this.apiUrl = 'https://api.whatsapp.com/send'; // Exemplo genérico
  }

  async sendAlert(message, type = 'info') {
    try {
      if (!this.apiKey || this.apiKey === 'seu_whatsapp_api_key_aqui') {
        log.warn(`⚠️ WhatsApp não configurado. Mensagem: ${message}`);
        return false;
      }

      // Simulação de envio (substitua com sua API real)
      const payload = {
        apiKey: this.apiKey,
        phone: this.managerPhone,
        message: this.formatMessage(message, type)
      };

      // Para integração real, use uma API como Twilio, MessageBird, etc.
      await this.simulateSendWhatsApp(payload);

      log.success(`📱 Alerta WhatsApp enviado para ${this.managerPhone}`);
      return true;
    } catch (error) {
      log.error('Erro ao enviar WhatsApp:', error.message);
      return false;
    }
  }

  formatMessage(message, type) {
    const emoji = {
      error: '🚨',
      warning: '⚠️',
      info: 'ℹ️',
      success: '✅'
    };

    return `${emoji[type] || '📢'} ${message}\n${new Date().toLocaleString('pt-BR')}`;
  }

  async simulateSendWhatsApp(payload) {
    // Simulação de envio via API
    log.trace(`📨 Simulando envio para ${payload.phone}:`, payload.message);
    
    // Em produção, fazer requisição real:
    // await axios.post('https://sua-api-whatsapp.com/send', payload)
  }

  async sendSelectionAlert(userEmail, selectedOption) {
    const message = `
Nova seleção de menu:
👤 ${userEmail}
✏️ Opção: ${selectedOption}
⏰ ${new Date().toLocaleTimeString('pt-BR')}
    `.trim();

    return this.sendAlert(message, 'info');
  }

  async sendErrorAlert(error, context) {
    const message = `
🚨 ERRO NO BOT
Contexto: ${context}
Mensagem: ${error.message}
⏰ ${new Date().toLocaleTimeString('pt-BR')}
    `.trim();

    return this.sendAlert(message, 'error');
  }

  async sendStats(stats) {
    const message = `
📊 RELATÓRIO DIÁRIO
Emails processados: ${stats.totalEmails || 0}
Seleções recebidas: ${stats.totalSelections || 0}
Tempo médio: ${stats.avgResponseTime || 'N/A'}
👥 Usuários únicos: ${stats.uniqueUsers || 0}
    `.trim();

    return this.sendAlert(message, 'success');
  }
}

export { WhatsAppManager };
