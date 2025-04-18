let carrinho = [];

// Adicionar ao carrinho
function adicionarAoCarrinho(produto, preco, imagem) {
  carrinho.push({ produto, preco, imagem });
  atualizarContadorCarrinho();
  atualizarMiniCarrinho();
  exibirNotificacao(`${produto} foi adicionado ao carrinho!`);
}

// Atualizar contadores
function atualizarContadorCarrinho() {
  document.getElementById('cart-count').textContent = carrinho.length;
  document.getElementById('cart-count-mobile').textContent = carrinho.length;
}

// Seletores
const miniCarrinho = document.getElementById('miniCarrinho');
const fecharCarrinho = document.getElementById('fecharCarrinho');
const carrinhoLinkDesktop = document.querySelector('.carrinho-link');
const carrinhoLinkMobile = document.querySelector('.mobile-menu .carrinho-link');

// Abrir e fechar carrinho
function abrirCarrinho() {
  miniCarrinho.style.display = 'block';
}
function fecharMiniCarrinho() {
  miniCarrinho.style.display = 'none';
}

// Atualizar mini carrinho
function atualizarMiniCarrinho() {
  const itensCarrinho = document.getElementById('itensCarrinho');
  const totalCarrinho = document.getElementById('totalCarrinho');

  itensCarrinho.innerHTML = '';
  let total = 0;

  carrinho.forEach((item, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <img src="${item.imagem}" alt="${item.produto}" width="50" height="50" style="border-radius: 5px; margin-right: 10px;">
      <span>${item.produto}</span>
      <span>R$ ${item.preco.toFixed(2)}</span>
      <button class="remover-item" data-index="${index}" style="margin-left: 10px; color: red; background: none; border: none; font-size: 16px;">X</button>
    `;
    li.style.display = 'flex';
    li.style.alignItems = 'center';
    li.style.justifyContent = 'space-between';
    li.style.marginBottom = '10px';
    itensCarrinho.appendChild(li);

    total += item.preco;
  });

  totalCarrinho.textContent = `R$ ${total.toFixed(2)}`;

  // Adiciona evento aos botões "X"
  const botoesRemover = document.querySelectorAll('.remover-item');
  botoesRemover.forEach((botao) => {
    botao.addEventListener('click', (e) => {
      const index = e.target.getAttribute('data-index');
      removerItemDoCarrinho(index);
    });
  });
}

// Remover item do carrinho
function removerItemDoCarrinho(index) {
  carrinho.splice(index, 1);
  atualizarContadorCarrinho();
  atualizarMiniCarrinho();
}

// Eventos para abrir/fechar o carrinho
carrinhoLinkDesktop.addEventListener('click', (e) => {
  e.preventDefault();
  abrirCarrinho();
});
carrinhoLinkMobile.addEventListener('click', (e) => {
  e.preventDefault();
  abrirCarrinho();
});
fecharCarrinho.addEventListener('click', fecharMiniCarrinho);

// Notificações
function exibirNotificacao(mensagem) {
  const container = document.getElementById('notificacao-container');
  const notificacao = document.createElement('div');
  notificacao.classList.add('notificacao');
  notificacao.textContent = mensagem;
  container.appendChild(notificacao);
  setTimeout(() => {
    notificacao.remove();
  }, 4000);
}