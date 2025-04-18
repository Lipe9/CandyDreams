document.getElementById('chatbot-toggle').addEventListener('click', () => {
  const chatbot = document.getElementById('chatbot-box');
  chatbot.style.display = chatbot.style.display === 'flex' ? 'none' : 'flex';
});

document.getElementById('chatbot-send').addEventListener('click', sendMessage);
document.getElementById('chatbot-input').addEventListener('keypress', function (e) {
  if (e.key === 'Enter') sendMessage();
});

function sendMessage() {
  const input = document.getElementById('chatbot-input');
  const message = input.value.trim();
  if (message === '') return;

  addMessage(message, 'user');
  input.value = '';

  setTimeout(() => {
    const reply = getBotReply(message);
    addMessage(reply, 'bot');
  }, 700);
}

function addMessage(text, type) {
  const messagesContainer = document.getElementById('chatbot-messages');
  const msg = document.createElement('div');
  msg.className = type === 'bot' ? 'bot-message' : 'user-message';
  msg.textContent = text;
  messagesContainer.appendChild(msg);
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function getBotReply(message) {
  const msg = message.toLowerCase();

  if (msg.includes('horário') || msg.includes('funciona')) {
    return 'Nosso atendimento é de segunda a sexta, das 08h às 18h.';
  }

  if (msg.includes('entrega') || msg.includes('prazo')) {
    return 'Entregamos em até 5 dias úteis após a confirmação do pagamento.';
  }

  if (msg.includes('frete') || msg.includes('custo')) {
    return 'O frete é calculado no carrinho com base no seu CEP.';
  }

  if (msg.includes('formas de pagamento') || msg.includes('pagar')) {
    return 'Aceitamos cartões de crédito, boleto bancário e Pix.';
  }

  if (msg.includes('olá') || msg.includes('oi')) {
    return 'Olá! Como posso te ajudar hoje? 😊';
  }

  return 'Desculpe, ainda não entendi. Pode reformular a pergunta?';
}
 if (msg.includes('nome do programador') || msg.includes('nome do desenvolvedo')) {
    return 'Olá! Como posso te ajudar hoje? 😊';
  }

  return 'Felipe Silva, @felipezy_9';
}
