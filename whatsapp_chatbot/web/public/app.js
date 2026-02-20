// ==========================================
// Chat Bot Admin Panel - JavaScript App
// ==========================================

let messagesData = {};

// ==================== LOAD DATA ====================
async function loadMessages() {
  try {
    const response = await fetch('/api/messages');
    messagesData = await response.json();
    
    setupWelcome();
    setupMenus();
    setupMessages();
    
    console.log('✅ Mensagens carregadas com sucesso!');
  } catch (error) {
    console.error('❌ Erro ao carregar mensagens:', error);
    showToast('Erro ao carregar mensagens!', 'error');
  }
}

// ==================== WELCOME TAB ====================
function setupWelcome() {
  const welcomeMsg = document.getElementById('welcomeMessage');
  const menuIntro = document.getElementById('menuIntro');
  const preview = document.getElementById('previewWelcome');

  welcomeMsg.value = messagesData.welcomeMessage || '';
  menuIntro.value = messagesData.menuIntro || '';

  // Real-time preview
  welcomeMsg.addEventListener('input', () => {
    preview.innerHTML = `<strong>${welcomeMsg.value}</strong><br>${menuIntro.value}`;
  });

  menuIntro.addEventListener('input', () => {
    preview.innerHTML = `<strong>${welcomeMsg.value}</strong><br>${menuIntro.value}`;
  });

  preview.innerHTML = `<strong>${welcomeMsg.value}</strong><br>${menuIntro.value}`;
}

// ==================== MENUS TAB ====================
function setupMenus() {
  const container = document.querySelector('.menus-grid');
  container.innerHTML = '';

  for (const [id, menu] of Object.entries(messagesData.menus)) {
    const card = document.createElement('div');
    card.className = 'menu-card';
    card.innerHTML = `
      <h3>Menu ${id}</h3>
      
      <div class="form-group">
        <label>Título:</label>
        <input type="text" class="input-text label-input" value="${menu.label}" data-id="${id}" data-field="label">
      </div>

      <div class="form-group">
        <label>Descrição:</label>
        <input type="text" class="input-text desc-input" value="${menu.description}" data-id="${id}" data-field="description">
      </div>

      <div class="form-group">
        <label>Resposta (HTML):</label>
        <textarea class="input-textarea response-input" data-id="${id}" data-field="response">${menu.response}</textarea>
      </div>

      <button class="btn-save" onclick="saveMenu(${id})">✅ Salvar Menu ${id}</button>
      <button class="btn-save" style="background: #3b82f6; margin-left: 8px;" onclick="previewMenu(${id})">👁️ Preview</button>
    `;

    container.appendChild(card);
  }
}

// ==================== OTHER MESSAGES TAB ====================
function setupMessages() {
  const invalidSel = document.getElementById('invalidSelection');
  const errorFb = document.getElementById('errorFallback');

  invalidSel.value = messagesData.invalidSelectionMessage || '';
  errorFb.value = messagesData.errorFallbackMessage || '';
}

// ==================== SAVE WELCOME ====================
async function saveWelcome() {
  try {
    const welcomeMsg = document.getElementById('welcomeMessage').value;
    const menuIntro = document.getElementById('menuIntro').value;

    if (!welcomeMsg || !menuIntro) {
      showToast('Preencha todos os campos!', 'error');
      return;
    }

    const response = await fetch('/api/messages/welcome', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ welcomeMessage: welcomeMsg, menuIntro })
    });

    if (response.ok) {
      showToast('✅ Boas-vindas salvo com sucesso!');
    }
  } catch (error) {
    console.error('Erro:', error);
    showToast('Erro ao salvar!', 'error');
  }
}

// ==================== SAVE MESSAGES ====================
async function saveMessages() {
  try {
    const invalidSel = document.getElementById('invalidSelection').value;
    const errorFb = document.getElementById('errorFallback').value;

    if (!invalidSel || !errorFb) {
      showToast('Preencha todos os campos!', 'error');
      return;
    }

    messagesData.invalidSelectionMessage = invalidSel;
    messagesData.errorFallbackMessage = errorFb;

    const response = await fetch('/api/messages', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(messagesData)
    });

    if (response.ok) {
      showToast('✅ Mensagens salvo com sucesso!');
    }
  } catch (error) {
    console.error('Erro:', error);
    showToast('Erro ao salvar!', 'error');
  }
}

// ==================== SAVE MENU ====================
async function saveMenu(id) {
  try {
    const card = document.querySelector(`.menu-card:has(.label-input[data-id="${id}"])`);
    const label = card.querySelector('.label-input').value;
    const description = card.querySelector('.desc-input').value;
    const response = card.querySelector('.response-input').value;

    if (!label || !description || !response) {
      showToast('Preencha todos os campos!', 'error');
      return;
    }

    const res = await fetch(`/api/messages/menu/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ label, description, response })
    });

    if (res.ok) {
      messagesData.menus[id] = { label, description, response };
      showToast(`✅ Menu ${id} salvo com sucesso!`);
    }
  } catch (error) {
    console.error('Erro:', error);
    showToast('Erro ao salvar!', 'error');
  }
}

// ==================== PREVIEW MENU ====================
function previewMenu(id) {
  const menu = messagesData.menus[id];
  const preview = menu.response;

  const modal = document.createElement('div');
  modal.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10000;
  `;

  modal.innerHTML = `
    <div style="background: #1a1f36; border-radius: 12px; padding: 20px; max-width: 500px; max-height: 70vh; overflow-y: auto; border: 1px solid #264c47;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
        <h3 style="color: #25d366;">Preview - Menu ${id}</h3>
        <button onclick="this.closest('div').parentElement.remove()" style="background: none; border: none; color: #99a3a8; font-size: 20px; cursor: pointer;">✕</button>
      </div>
      <div style="color: #ffffff; font-size: 14px; line-height: 1.6;">
        ${preview}
      </div>
    </div>
  `;

  document.body.appendChild(modal);
}

// ==================== SAVE ALL ====================
async function saveAll() {
  try {
    const response = await fetch('/api/messages', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(messagesData)
    });

    if (response.ok) {
      showToast('💾 Tudo salvo com sucesso!');
    }
  } catch (error) {
    console.error('Erro:', error);
    showToast('Erro ao salvar!', 'error');
  }
}

// ==================== TOAST NOTIFICATION ====================
function showToast(message, type = 'success') {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.className = `toast show ${type === 'error' ? 'error' : ''}`;

  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

// ==================== TAB SWITCHING ====================
document.querySelectorAll('.nav-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    if (btn.id === 'saveBtn') {
      saveAll();
      return;
    }

    if (btn.id === 'resetBtn') {
      if (confirm('Tem certeza que quer restaurar ao padrão? Isso apagará todas as mudanças!')) {
        location.reload();
      }
      return;
    }

    const tab = btn.getAttribute('data-tab');
    if (!tab) return;

    // Remove active from all
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));

    // Add active to clicked
    btn.classList.add('active');
    document.getElementById(tab).classList.add('active');
  });
});

// ==================== INIT ====================
document.addEventListener('DOMContentLoaded', () => {
  loadMessages();
});
