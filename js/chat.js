document.getElementById('chatbot-toggle').addEventListener('click', () => {
  const chatbot = document.getElementById('chatbot-box');
  const messagesContainer = document.getElementById('chatbot-messages');
  
  // Alterna a visibilidade do chatbot
  chatbot.style.display = chatbot.style.display === 'flex' ? 'none' : 'flex';

  // Se o chatbot foi aberto, exibe as mensagens
  if (chatbot.style.display === 'flex') {
    messagesContainer.innerHTML = ''; // Limpa as mensagens antigas
    showGreetingMessage(); // Exibe a mensagem inicial "Como posso ajudar?"
    messagesContainer.scrollTop = 0; // Garante que o scroll começa no topo
  }
});

document.getElementById('chatbot-send').addEventListener('click', sendMessage);
document.getElementById('chatbot-input').addEventListener('keypress', function (e) {
  if (e.key === 'Enter') sendMessage();
});

function showGreetingMessage() {
  const greeting = "Como posso ajudar? 😊\nEscolha uma das opções abaixo:";
  addMessage(greeting, 'bot');
  showOptions(); // Exibe as opções após a saudação
}

function showOptions() {
  const options = `
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
    showPostResponseOptions(); // Exibe as opções após a resposta
  }, 500);
}

function addMessage(text, type) {
  const messagesContainer = document.getElementById('chatbot-messages');
  const msg = document.createElement('div');
  msg.className = type === 'bot' ? 'bot-message' : 'user-message';
  msg.innerHTML = text.replace(/\n/g, "<br>");
  messagesContainer.appendChild(msg);
  messagesContainer.scrollTop = messagesContainer.scrollHeight; // Garante que o scroll vai para a última mensagem
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

// Função para exibir opções após cada resposta
function showPostResponseOptions() {
  const options = `
1️⃣ - Voltar ao menu
2️⃣ - Fechar o atendimento`;
  addMessage(options, 'bot');
}

function handlePostResponse(message) {
  const option = message.trim();

  switch (option) {
    case '1':
      showOptions(); // Volta ao menu inicial
      break;
    case '2':
      closeChat(); // Fecha o atendimento
      break;
    default:
      addMessage('Opção inválida. Por favor, digite 1 para voltar ao menu ou 2 para fechar o atendimento.', 'bot');
  }
}

function closeChat() {
  const chatbot = document.getElementById('chatbot-box');
  chatbot.style.display = 'none'; // Fecha o chat
  const messagesContainer = document.getElementById('chatbot-messages');
  messagesContainer.innerHTML = ''; // Limpa as mensagens
}
