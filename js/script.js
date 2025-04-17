function toggleMenu() {
    const menu = document.getElementById('mobileMenu');
    const hamburger = document.getElementById('hamburger');
    menu.classList.toggle('active');
    hamburger.classList.toggle('active');
  }

  // Fecha o menu ao clicar em um link mobile
  document.querySelectorAll('.mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
      document.getElementById('mobileMenu').classList.remove('active');
      document.getElementById('hamburger').classList.remove('active');
    });
  });
  

function toggleMenu() {
    const menu = document.getElementById('mobileMenu');
    const hamburger = document.getElementById('hamburger');
    menu.classList.toggle('active');
    hamburger.classList.toggle('active');
  }

  // Fecha o menu ao clicar em um link mobile
  document.querySelectorAll('.mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
      document.getElementById('mobileMenu').classList.remove('active');
      document.getElementById('hamburger').classList.remove('active');
    });
  });

  // Ativa o link do menu baseado na rolagem da página
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('nav a, .mobile-menu a');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      if (pageYOffset >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });


const carousel = document.getElementById('carousel');
let index = 0;

function moveSlide(step) {
  index = (index + step + 3) % 3;
  carousel.style.transform = `translateX(-${index * 100}vw)`;
}

setInterval(() => moveSlide(1), 5000); // troca automática a cada 5s

// Carrinho 
let cart = [];

function addToCart(product) {
  cart.push(product);
  updateCartCount();
}

function updateCartCount() {
  const cartCountElement = document.getElementById('cart-count');
  cartCountElement.textContent = cart.length;
}

document.querySelectorAll('.produto-card').forEach((card) => {
  card.addEventListener('click', () => {
    const productName = card.querySelector('h3').textContent;
    addToCart(productName);
    alert(`${productName} adicionado ao carrinho!`);
  });
});
 
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