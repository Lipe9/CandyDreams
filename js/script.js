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
function toggleMenu() {
  const mobileMenu = document.getElementById('mobileMenu');
  mobileMenu.classList.toggle('active');
}

function adicionarAoCarrinho(produto, preco) {
  const imagem = document.querySelector(`img[alt="${produto}"]`).src;
  carrinho.push({ produto, preco, imagem });
  atualizarContadorCarrinho();
  renderizarMiniCarrinho();
  document.getElementById('miniCarrinho').style.display = 'block';
}

function renderizarMiniCarrinho() {
  const container = document.getElementById('itensCarrinho');
  container.innerHTML = '';

  carrinho.forEach(item => {
    const div = document.createElement('div');
    div.className = 'item-carrinho';
    div.innerHTML = `
      <img src="${item.imagem}" alt="${item.produto}">
      <div>
        <strong>${item.produto}</strong><br>
        R$ ${item.preco.toFixed(2)}
      </div>
    `;
    container.appendChild(div);
  });
}

function irParaCompra() {
  window.location.href = 'compra.html';
}