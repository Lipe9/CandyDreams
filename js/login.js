const registerButton = document.getElementById("register");
const loginButton = document.getElementById("login");
const container = document.getElementById("container");

registerButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

loginButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

// Visibilidade da senha
function togglePasswordVisibility() {
  const campoSenha = document.getElementById('senha');
  const eyeIconOpen = document.getElementById('eye-icon-open');
  const eyeIconClosed = document.getElementById('eye-icon-closed');

  if (campoSenha.type === 'password') {
    campoSenha.type = 'text';
    eyeIconOpen.style.display = 'none';
    eyeIconClosed.style.display = 'block';
  } else {
    campoSenha.type = 'password';
    eyeIconOpen.style.display = 'block';
    eyeIconClosed.style.display = 'none';
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const registerForm = document.getElementById("rg-form");
  const loginForm = document.getElementById("login-form");

  // Registro
  registerForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = document.getElementById("nm-usuario").value.trim();
    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value.trim();

    if (nome && email && senha) {
      localStorage.setItem("user", JSON.stringify({ nome, email, senha }));
      alert("Usuário cadastrado com sucesso!");
      localStorage.setItem("isLoggedIn", "true");
      window.location.href = "index.html";
    } else {
      alert("Preencha todos os campos.");
    }
  });

  // Login
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const nomeLogin = document.getElementById("nm-usuario1").value.trim();
    const senhaLogin = document.getElementById("senha1").value.trim();
    const user = JSON.parse(localStorage.getItem("user"));

    if (user && user.nome === nomeLogin && user.senha === senhaLogin) {
      alert("Login bem-sucedido!");
      localStorage.setItem("isLoggedIn", "true");
      window.location.href = "index.html";
    } else {
      alert("Nome ou senha incorretos.");
    }
  });
});