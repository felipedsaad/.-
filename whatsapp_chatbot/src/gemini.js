import { GoogleGenerativeAI } from '@google/generative-ai';
import { log } from './logger.js';

class GeminiAI {
  constructor(apiKey) {
    this.client = new GoogleGenerativeAI(apiKey);
    this.model = this.client.getGenerativeModel({ model: 'gemini-pro' });
    this.conversationHistory = new Map();
  }

  async generateResponse(userMessage, userId) {
    try {
      let history = this.conversationHistory.get(userId) || [];
      
      history.push({
        role: 'user',
        parts: [{ text: userMessage }]
      });

      const chat = this.model.startChat({
        history: history.slice(-10) // Últimas 10 mensagens
      });

      const response = await chat.sendMessage(userMessage);
      const aiText = response.response.text();

      history.push({
        role: 'model',
        parts: [{ text: aiText }]
      });

      this.conversationHistory.set(userId, history);

      log.success(`🤖 Resposta Gemini gerada para ${userId}`);
      return aiText;
    } catch (error) {
      log.error('Erro ao gerar resposta Gemini:', error);
      return this.getFallbackResponse();
    }
  }

  getFallbackResponse() {
    return `Desculpe, estou tendo dificuldades no momento. 
Tente novamente em alguns segundos ou entre em contato com nosso suporte.`;
  }

  clearHistory(userId) {
    this.conversationHistory.delete(userId);
  }

  async streamResponse(userMessage, userId) {
    try {
      const response = await this.model.generateContentStream(userMessage);
      let fullText = '';

      for await (const chunk of response.stream) {
        const text = chunk.text();
        fullText += text;
      }

      return fullText;
    } catch (error) {
      log.error('Erro ao fazer stream:', error);
      return this.getFallbackResponse();
    }
  }
}

export { GeminiAI };
