document.getElementById('chatbot-toggle').addEventListener('click', () => {
  const chatbot = document.getElementById('chatbot-box');
  chatbot.style.display = chatbot.style.display === 'flex' ? 'none' : 'flex';
  if (chatbot.style.display === 'flex') {
    showOptions(); // Mostra as opções quando abrir
  }
});

document.getElementById('chatbot-send').addEventListener('click', sendMessage);
document.getElementById('chatbot-input').addEventListener('keypress', function (e) {
  if (e.key === 'Enter') sendMessage();
});

function showOptions() {
  const options = `
1️⃣ - Qual o horário de atendimento?\n
2️⃣ - Qual o prazo de entrega?\n
3️⃣ - Quanto custa o frete?\n
4️⃣ - Quais são as formas de pagamento?\n
5️⃣ - Quem é o desenvolvedor do site?\n
6️⃣ - Falar com atendente humano\n
Digite o número da dúvida para continuar.`;
  addMessage(options, 'bot');
}

function sendMessage() {
  const input = document.getElementById('chatbot-input');
  const message = input.value.trim();
  if (message === '') return;

  addMessage(message, 'user');
  input.value = '';

  setTimeout(() => {
    const reply = getBotReply(message);
    addMessage(reply, 'bot');
  }, 500);
}

function addMessage(text, type) {
  const messagesContainer = document.getElementById('chatbot-messages');
  const msg = document.createElement('div');
  msg.className = type === 'bot' ? 'bot-message' : 'user-message';
  msg.innerHTML = text.replace(/\n/g, "<br>");
  messagesContainer.appendChild(msg);
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function getBotReply(message) {
  const option = message.trim();

  switch (option) {
    case '1':
      return 'Nosso atendimento é de segunda a sexta, das 08h às 18h.';
    case '2':
      return 'Entregamos em até 5 dias úteis após a confirmação do pagamento.';
    case '3':
      return 'O frete é calculado no carrinho com base no seu CEP.';
    case '4':
      return 'Aceitamos cartões de crédito, boleto bancário e Pix.';
    case '5':
      return 'Desenvolvedor: Felipe Silva (@felipezy_9)';
    case '6':
      return 'Aguarde um momento, conectando com um atendente humano...';
    default:
      return 'Opção inválida. Por favor, digite um número de 1 a 6.';
  }
}
