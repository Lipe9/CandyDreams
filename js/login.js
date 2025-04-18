document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('login-form');
  const registerForm = document.getElementById('register-form');
  const switchToRegister = document.getElementById('switch-to-register');
  const switchToLogin = document.getElementById('switch-to-login');
  const formTitle = document.getElementById('form-title');

  // Trocar entre login e cadastro
  switchToRegister.onclick = () => {
    loginForm.classList.add('hidden');
    registerForm.classList.remove('hidden');
    formTitle.textContent = "Cadastro";
  };

  switchToLogin.onclick = () => {
    registerForm.classList.add('hidden');
    loginForm.classList.remove('hidden');
    formTitle.textContent = "Login";
  };

  // Cadastro
  registerForm.onsubmit = (e) => {
    e.preventDefault();

    const nome = document.getElementById('register-name').value;
    const email = document.getElementById('register-email').value;
    const senha = document.getElementById('register-password').value;

    const usuario = { nome, email, senha };
    localStorage.setItem('usuarioCadastrado', JSON.stringify(usuario));
    localStorage.setItem('usuarioLogado', JSON.stringify({ nome }));

    window.location.href = 'index.html';
  };

  // Login
  loginForm.onsubmit = (e) => {
    e.preventDefault();

    const email = document.getElementById('login-email').value;
    const senha = document.getElementById('login-password').value;

    const usuario = JSON.parse(localStorage.getItem('usuarioCadastrado'));

    if (usuario && usuario.email === email && usuario.senha === senha) {
      localStorage.setItem('usuarioLogado', JSON.stringify({ nome: usuario.nome }));
      window.location.href = 'index.html';
    } else {
      alert('Email ou senha inválidos!');
    }
  };
});
