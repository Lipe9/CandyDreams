const OPENAI_API_KEY = 'SUA_API_KEY_AQUI';

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

  // Carregando...
  addMessage('Digitando...', 'bot');

  getAIResponse(message).then(reply => {
    const botMessages = document.querySelectorAll('.bot-message');
    botMessages[botMessages.length - 1].textContent = reply;
  });
}

function addMessage(text, type) {
  const messagesContainer = document.getElementById('chatbot-messages');
  const msg = document.createElement('div');
  msg.className = type === 'bot' ? 'bot-message' : 'user-message';
  msg.textContent = text;
  messagesContainer.appendChild(msg);
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

async function getAIResponse(message) {
  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${OPENAI_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: message }],
      temperature: 0.7
    })
  });

  const data = await response.json();
  return data.choices?.[0]?.message?.content?.trim() || 'Desculpe, houve um erro ao buscar resposta 😥';
}
