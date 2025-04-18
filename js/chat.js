let optionsShown = false;

document.getElementById('chatbot-toggle').addEventListener('click', () => {
  const chatbot = document.getElementById('chatbot-box');
  const messagesContainer = document.getElementById('chatbot-messages');

  const isOpening = chatbot.style.display !== 'flex';
  chatbot.style.display = isOpening ? 'flex' : 'none';

  if (isOpening) {
    messagesContainer.innerHTML = ''; // Limpa as mensagens anteriores
    messagesContainer.scrollTop = 0; // Reseta o scroll para o topo
    showGreetingMessage(); // Exibe a mensagem "Como posso ajudar?"
  }
});

document.getElementById('chatbot-send').addEventListener('click', sendMessage);
document.getElementById('chatbot-input').addEventListener('keypress', function (e) {
  if (e.key === 'Enter') sendMessage();
});

function showGreetingMessage() {
  // const greeting = "Como posso ajudar? 😊\nEscolha uma das opções abaixo:";
  addMessage(greeting, 'bot');
  showOptions(); // Mostra as opções logo após a saudação
}

function showOptions() {
  const options = `
Como posso ajudar?😊
Escolha uma das opções abaixo
1️⃣ - Qual o horário de atendimento?  
2️⃣ - Qual o prazo de entrega?  
3️⃣ - Quanto custa o frete?  
4️⃣ - Quais são as formas de pagamento?  
5️⃣ - Quem é o desenvolvedor do site?  
6️⃣ - Falar com atendente humano
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
  messagesContainer.scrollTop = messagesContainer.scrollHeight; // Garante que o scroll desça quando novas mensagens são adicionadas
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
