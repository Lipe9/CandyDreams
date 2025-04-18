document.addEventListener('DOMContentLoaded', () => {
  const loginBtn = document.getElementById('login-btn');
  const userInfo = document.getElementById('user-info');
  const userName = document.getElementById('user-name');

  const usuario = JSON.parse(localStorage.getItem('usuarioLogado'));

  if (usuario) {
    loginBtn.classList.add('hidden');
    userInfo.classList.remove('hidden');
    userName.textContent = usuario.nome;
  }

  loginBtn.addEventListener('click', () => {
    window.location.href = 'login.html';
  });
});
