import { log } from './logger.js';

class Tracker {
  constructor() {
    this.interactions = [];
    this.timeline = [];
  }

  recordInteraction(userId, type, data) {
    const timestamp = Date.now();
    const interaction = {
      id: `${userId}-${timestamp}`,
      userId,
      type, // 'email_received', 'menu_shown', 'selection_made', 'response_sent'
      data,
      timestamp,
      duration: null
    };

    this.interactions.push(interaction);
    this.timeline.push({
      time: new Date().toISOString(),
      event: type,
      user: userId
    });

    log.trace(`📍 Interação registrada: ${type} (${userId})`);
    return interaction.id;
  }

  updateDuration(interactionId, duration) {
    const interaction = this.interactions.find(i => i.id === interactionId);
    if (interaction) {
      interaction.duration = duration;
    }
  }

  getTimeline() {
    return this.timeline.sort((a, b) => new Date(a.time) - new Date(b.time));
  }

  getUserInteractions(userId) {
    return this.interactions.filter(i => i.userId === userId);
  }

  getStats() {
    return {
      totalInteractions: this.interactions.length,
      uniqueUsers: new Set(this.interactions.map(i => i.userId)).size,
      interactionsByType: this.getInteractionsByType(),
      averageResponseTime: this.getAverageResponseTime(),
      timeline: this.getTimeline()
    };
  }

  getInteractionsByType() {
    const types = {};
    this.interactions.forEach(i => {
      types[i.type] = (types[i.type] || 0) + 1;
    });
    return types;
  }

  getAverageResponseTime() {
    const times = this.interactions
      .filter(i => i.duration !== null)
      .map(i => i.duration);
    
    if (times.length === 0) return 0;
    return Math.round(times.reduce((a, b) => a + b) / times.length);
  }

  exportReport() {
    return {
      timestamp: new Date().toISOString(),
      stats: this.getStats(),
      interactions: this.interactions,
      summary: {
        totalEmails: this.interactions.filter(i => i.type === 'email_received').length,
        totalSelections: this.interactions.filter(i => i.type === 'selection_made').length,
        avgResponseTime: `${this.getAverageResponseTime()}ms`
      }
    };
  }
}

export { Tracker };
