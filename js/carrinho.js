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