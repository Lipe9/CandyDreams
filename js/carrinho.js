let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

// Função para salvar o carrinho no localStorage
function salvarCarrinho() {
  localStorage.setItem('carrinho', JSON.stringify(carrinho));
}

// Função para adicionar um produto ao carrinho
function adicionarAoCarrinho(produto, preco, imagem) {
  carrinho.push({ produto, preco, imagem });
  salvarCarrinho();
  atualizarContadorCarrinho();
  atualizarMiniCarrinho();
  exibirNotificacao(`${produto} foi adicionado ao carrinho!`);
}

// Função para remover um item do carrinho por índice
function removerDoCarrinho(index) {
  carrinho.splice(index, 1);
  salvarCarrinho();
  atualizarContadorCarrinho();
  atualizarMiniCarrinho();
}

// Função para atualizar os contadores de itens no carrinho
function atualizarContadorCarrinho() {
  const contadorDesktop = document.getElementById('cart-count');
  const contadorMobile = document.getElementById('cart-count-mobile');
  contadorDesktop.textContent = carrinho.length;
  contadorMobile.textContent = carrinho.length;
}

// Função para exibir o mini carrinho
function abrirCarrinho() {
  miniCarrinho.style.display = 'block';
}

// Função para fechar o mini carrinho
function fecharMiniCarrinho() {
  miniCarrinho.style.display = 'none';
}

// Função para atualizar o conteúdo do mini carrinho
function atualizarMiniCarrinho() {
  const itensCarrinho = document.getElementById('itensCarrinho');
  const totalCarrinho = document.getElementById('totalCarrinho');

  // Limpa o conteúdo atual
  itensCarrinho.innerHTML = '';

  let total = 0;

  carrinho.forEach((item, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <img src="${item.imagem}" alt="${item.produto}" width="50" height="50" style="border-radius: 5px; margin-right: 10px;">
      <span style="flex: 1;">${item.produto}</span>
      <span>R$ ${item.preco.toFixed(2)}</span>
      <button onclick="removerDoCarrinho(${index})" style="background: none; border: none; color: red; font-weight: bold; margin-left: 10px; cursor: pointer;">X</button>
    `;
    li.style.display = 'flex';
    li.style.alignItems = 'center';
    li.style.justifyContent = 'space-between';
    li.style.marginBottom = '10px';
    itensCarrinho.appendChild(li);

    total += item.preco;
  });

  totalCarrinho.textContent = `R$ ${total.toFixed(2)}`;
}

// Eventos para abrir e fechar o carrinho
carrinhoLinkDesktop.addEventListener('click', (e) => {
  e.preventDefault();
  abrirCarrinho();
});

carrinhoLinkMobile.addEventListener('click', (e) => {
  e.preventDefault();
  abrirCarrinho();
});

fecharCarrinho.addEventListener('click', fecharMiniCarrinho);

// Notificação
function exibirNotificacao(mensagem) {
  const container = document.getElementById('notificacao-container');
  const notificacao = document.createElement('div');
  notificacao.classList.add('notificacao');
  notificacao.textContent = mensagem;
  container.appendChild(notificacao);
  setTimeout(() => notificacao.remove(), 4000);
}

// Ao carregar a página, atualiza o carrinho
document.addEventListener('DOMContentLoaded', () => {
  atualizarContadorCarrinho();
  atualizarMiniCarrinho();
});