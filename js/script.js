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
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    const user = JSON.parse(localStorage.getItem("user"));

    const loginElement = document.getElementById("login");
    const userProfile = document.getElementById("user-profile");
    const logoutButton = document.getElementById("logout-button");
    const usernameElement = document.getElementById("username");

    if (isLoggedIn && user) {
        loginElement.style.display = "none"; // Oculta o botão de login
        userProfile.style.display = "flex"; // Exibe o perfil do usuário
        logoutButton.style.display = "block"; // Exibe o botão de logout
        usernameElement.textContent = user.nome; // Mostra o nome do usuário
    }

    logoutButton.addEventListener("click", () => {
        localStorage.setItem("isLoggedIn", "false"); // Remove o estado logado
        window.location.href = "login.html"; // Redireciona para a página de login
    });
});