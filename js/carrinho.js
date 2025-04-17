let carrinho = [];

function adicionarAoCarrinho(produto, preco) {
  // Adiciona o produto ao carrinho
  carrinho.push({ produto, preco });
  atualizarContadorCarrinho();
  alert(`${produto} foi adicionado ao carrinho!`);
}

function atualizarContadorCarrinho() {
  // Atualiza os contadores de itens no carrinho
  const contadorDesktop = document.getElementById('cart-count');
  const contadorMobile = document.getElementById('cart-count-mobile');
  contadorDesktop.textContent = carrinho.length;
  contadorMobile.textContent = carrinho.length;
}

// Exemplo para alternar o menu mobile
function toggleMenu() {
  const mobileMenu = document.getElementById('mobileMenu');
  mobileMenu.classList.toggle('active');
}


// Seleciona os elementos
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