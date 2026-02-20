const LOG_LEVELS = {
  error: { color: '\x1b[31m', prefix: '❌' },   // Red
  warn: { color: '\x1b[33m', prefix: '⚠️' },    // Yellow
  info: { color: '\x1b[36m', prefix: 'ℹ️' },    // Cyan
  success: { color: '\x1b[32m', prefix: '✅' }, // Green
  trace: { color: '\x1b[35m', prefix: '🔍' },   // Magenta
  debug: { color: '\x1b[34m', prefix: '🐛' }    // Blue
};

const RESET = '\x1b[0m';

class Logger {
  constructor(logLevel = 'info') {
    this.logLevel = logLevel;
    this.levels = ['error', 'warn', 'info', 'success', 'trace', 'debug'];
  }

  log(level, message, data = '') {
    const levelConfig = LOG_LEVELS[level];
    if (!levelConfig) return;

    const timestamp = new Date().toLocaleTimeString('pt-BR');
    const dataStr = data ? ` ${JSON.stringify(data)}` : '';

    console.log(
      `${levelConfig.color}[${timestamp}] ${levelConfig.prefix} ${message}${dataStr}${RESET}`
    );
  }

  error(message, data) {
    this.log('error', message, data);
  }

  warn(message, data) {
    this.log('warn', message, data);
  }

  info(message, data) {
    this.log('info', message, data);
  }

  success(message, data) {
    this.log('success', message, data);
  }

  trace(message, data) {
    this.log('trace', message, data);
  }

  debug(message, data) {
    this.log('debug', message, data);
  }

  divider() {
    console.log('─'.repeat(60));
  }

  header(title) {
    console.log('\n');
    this.divider();
    console.log(`  🤖 ${title.toUpperCase()}`);
    this.divider();
  }
}

export const log = new Logger();
