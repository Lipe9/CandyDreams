// Exibir modal de login/cadastro
const loginModal = document.getElementById('login-modal');
const acessarBtns = document.querySelectorAll('.acessar-btn');
const userInfoDesktop = document.getElementById('user-info-desktop');
const userInfoMobile = document.getElementById('user-info-mobile');
const usernameDesktop = document.getElementById('username-display');
const usernameMobile = document.getElementById('username-display-mobile');
const closeModal = document.getElementById('modal-close');
const showRegister = document.getElementById('show-register');
const showLogin = document.getElementById('show-login');
const loginContainer = document.querySelector('.login-container');
const registerContainer = document.querySelector('.register-container');

// Abrir modal
acessarBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    loginModal.style.display = 'flex';
  });
});

// Fechar modal
closeModal.addEventListener('click', () => {
  loginModal.style.display = 'none';
});

// Alternar para cadastro
showRegister.addEventListener('click', () => {
  loginContainer.style.display = 'none';
  registerContainer.style.display = 'block';
});

// Alternar para login
showLogin.addEventListener('click', () => {
  loginContainer.style.display = 'block';
  registerContainer.style.display = 'none';
});

// Simular login e cadastro
const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = document.getElementById('login-username').value;
  // Salva o usuário no localStorage e atualiza a interface
  localStorage.setItem('username', username);
  atualizarUsuario();
  loginModal.style.display = 'none';
});

registerForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = document.getElementById('register-username').value;
  // Salva o usuário no localStorage e atualiza a interface
  localStorage.setItem('username', username);
  atualizarUsuario();
  loginModal.style.display = 'none';
});

// Atualizar interface com o nome do usuário
function atualizarUsuario() {
  const username = localStorage.getItem('username');
  if (username) {
    // Esconder botões "Acessar"
    acessarBtns.forEach((btn) => {
      btn.style.display = 'none';
    });

    // Mostrar informações do usuário
    userInfoDesktop.style.display = 'flex';
    usernameDesktop.textContent = username;

    userInfoMobile.style.display = 'flex';
    usernameMobile.textContent = username;
  }
}

// Checar se o usuário já está logado ao carregar a página
window.addEventListener('DOMContentLoaded', atualizarUsuario);

// Elementos de interface
const userInfoDesktop = document.getElementById('user-info-desktop');
const usernameDesktop = document.getElementById('username-display');
const userDropdown = document.getElementById('user-dropdown');
const logoutButton = document.getElementById('logout-button');

// Alternar exibição do menu suspenso
usernameDesktop.addEventListener('click', () => {
  const isDropdownVisible = userDropdown.style.display === 'block';
  userDropdown.style.display = isDropdownVisible ? 'none' : 'block';
});

// Logout
logoutButton.addEventListener('click', () => {
  // Remover o nome do usuário do localStorage
  localStorage.removeItem('username');

  // Atualizar interface para exibir o botão "Acessar"
  document.querySelectorAll('.acessar-btn').forEach((btn) => {
    btn.style.display = 'block';
  });

  // Ocultar informações do usuário
  userInfoDesktop.style.display = 'none';

  // Ocultar o menu suspenso
  userDropdown.style.display = 'none';
});

// Fechar dropdown ao clicar fora
document.addEventListener('click', (e) => {
  if (!userInfoDesktop.contains(e.target)) {
    userDropdown.style.display = 'none';
  }
});

// Atualizar interface com o nome do usuário
function atualizarUsuario() {
  const username = localStorage.getItem('username');
  if (username) {
    // Esconder botões "Acessar"
    document.querySelectorAll('.acessar-btn').forEach((btn) => {
      btn.style.display = 'none';
    });

    // Mostrar informações do usuário
    userInfoDesktop.style.display = 'flex';
    usernameDesktop.textContent = username;
  }
}

// Checar se o usuário já está logado ao carregar a página
window.addEventListener('DOMContentLoaded', atualizarUsuario);