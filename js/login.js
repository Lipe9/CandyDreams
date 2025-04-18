// Exibir modal
const loginModal = document.getElementById('login-modal');
const acessarBtns = document.querySelectorAll('.acessar-btn');
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
  // Salva o usuário no localStorage e volta para a tela inicial
  localStorage.setItem('username', username);
  atualizarUsuario();
  loginModal.style.display = 'none';
});

registerForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = document.getElementById('register-username').value;
  // Salva o usuário no localStorage e volta para a tela inicial
  localStorage.setItem('username', username);
  atualizarUsuario();
  loginModal.style.display = 'none';
});

// Atualizar interface com o nome do usuário
function atualizarUsuario() {
  const username = localStorage.getItem('username');
  if (username) {
    document.querySelectorAll('.acessar-btn').forEach((btn) => {
      btn.style.display = 'none';
    });
    const nav = document.querySelector('nav');
    const userSpan = document.createElement('span');
    userSpan.textContent = `Bem-vindo, ${username}`;
    userSpan.style.marginLeft = '1rem';
    userSpan.style.color = 'white';
    nav.appendChild(userSpan);
  }
}

// Checar se o usuário já está logado
window.addEventListener('DOMContentLoaded', atualizarUsuario);