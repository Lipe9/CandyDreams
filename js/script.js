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



  document.addEventListener("DOMContentLoaded", () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  // Desktop
  const userInfo = document.getElementById("user-info");
  const usernameDisplay = document.getElementById("username-display");
  const logoutBtn = document.getElementById("logout-btn");

  // Mobile
  const userInfoMobile = document.getElementById("user-info-mobile");
  const usernameDisplayMobile = document.getElementById("username-display-mobile");
  const logoutBtnMobile = document.getElementById("logout-btn-mobile");

  const loginLink = document.getElementById("login-link");

  if (isLoggedIn === "true" && user) {
    // Mostra usuário - Desktop
    if (userInfo && usernameDisplay) {
      userInfo.style.display = "inline-block";
      usernameDisplay.textContent = user.nome;
    }

    // Mostra usuário - Mobile
    if (userInfoMobile && usernameDisplayMobile) {
      userInfoMobile.style.display = "inline-block";
      usernameDisplayMobile.textContent = user.nome;
    }

    // Esconde o botão de login
    if (loginLink) loginLink.style.display = "none";

    // Função logout
    const logout = () => {
      localStorage.removeItem("isLoggedIn");
      window.location.reload();
    };

    // Eventos de logout
    if (logoutBtn) logoutBtn.addEventListener("click", logout);
    if (logoutBtnMobile) logoutBtnMobile.addEventListener("click", logout);
  }
});