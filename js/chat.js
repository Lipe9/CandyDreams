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

  const messagesContainer = document.getElementById('chatbot-messages');
  const userMessage = document.createElement('div');
  userMessage.className = 'user-message';
  userMessage.textContent = message;
  messagesContainer.appendChild(userMessage);

  input.value = '';
  messagesContainer.scrollTop = messagesContainer.scrollHeight;

  setTimeout(() => {
    const botReply = document.createElement('div');
    botReply.className = 'bot-message';
    botReply.textContent = 'Estou analisando...';
    messagesContainer.appendChild(botReply);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }, 1000);
}
