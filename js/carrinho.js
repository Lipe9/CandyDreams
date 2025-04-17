let carrinho = [];

// Função para adicionar um produto ao carrinho
function adicionarAoCarrinho(produto, preco, imagem) {
  // Adiciona o produto ao carrinho
  carrinho.push({ produto, preco, imagem });
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

// Seleciona os elementos do mini carrinho
const miniCarrinho = document.getElementById('miniCarrinho');
const fecharCarrinho = document.getElementById('fecharCarrinho');
const carrinhoLinkDesktop = document.querySelector('.carrinho-link');
const carrinhoLinkMobile = document.querySelector('.mobile-menu .carrinho-link');

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

  // Variável para calcular o total
  let total = 0;

  // Adiciona cada item no carrinho ao mini carrinho
  carrinho.forEach((item) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <img src="${item.imagem}" alt="${item.produto}" width="50" height="50" style="border-radius: 5px; margin-right: 10px;">
      <span>${item.produto}</span>
      <span>R$ ${item.preco.toFixed(2)}</span>
    `;
    li.style.display = 'flex';
    li.style.alignItems = 'center';
    li.style.justifyContent = 'space-between';
    li.style.marginBottom = '10px';
    itensCarrinho.appendChild(li);

    // Adiciona o preço ao total
    total += item.preco;
  });

  // Atualiza o total no carrinho
  totalCarrinho.textContent = `R$ ${total.toFixed(2)}`;
}

// Adiciona os eventos de clique para abrir e fechar o carrinho
carrinhoLinkDesktop.addEventListener('click', (e) => {
  e.preventDefault(); // Evita navegação padrão
  abrirCarrinho();
});

carrinhoLinkMobile.addEventListener('click', (e) => {
  e.preventDefault(); // Evita navegação padrão
  abrirCarrinho();
});

fecharCarrinho.addEventListener('click', fecharMiniCarrinho);


// Função para exibir notificações personalizadas
function exibirNotificacao(mensagem) {
  const container = document.getElementById('notificacao-container');

  // Cria o elemento da notificação
  const notificacao = document.createElement('div');
  notificacao.classList.add('notificacao');
  notificacao.textContent = mensagem;

  // Adiciona a notificação ao contêiner
  container.appendChild(notificacao);

  // Remove a notificação após 4 segundos
  setTimeout(() => {
    notificacao.remove();
  }, 4000);
}

// Atualize a função adicionarAoCarrinho para usar a notificação
function adicionarAoCarrinho(produto, preco, imagem) {
  // Adiciona o produto ao carrinho
  carrinho.push({ produto, preco, imagem });
  atualizarContadorCarrinho();
  atualizarMiniCarrinho();

  // Exibe a notificação personalizada
  exibirNotificacao(`${produto} foi adicionado ao carrinho!`);
}