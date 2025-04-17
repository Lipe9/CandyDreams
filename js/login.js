const registerButton = document.getElementById("register");
const loginButton = document.getElementById("login");
const container = document.getElementById("container");

registerButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

loginButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("login-form");
  const registerForm = document.getElementById("register-form");

  loginForm?.addEventListener("submit", function (e) {
    e.preventDefault();
    const username = loginForm.querySelector('input[name="username"]').value;
    localStorage.setItem("username", username);
    window.location.href = "index.html";
  });

  registerForm?.addEventListener("submit", function (e) {
    e.preventDefault();
    const username = registerForm.querySelector('input[name="username"]').value;
    localStorage.setItem("username", username);
    window.location.href = "index.html";
  });
});
const registerButton = document.getElementById("register");
const loginButton = document.getElementById("login");
const container = document.getElementById("container");

registerButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

loginButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("login-form");
  
form.addEventListener("submit", function(event) {
    event.preventDefault(); 
  
    const username = document.getElementById("nm-usuario1").value;
    const password = document.getElementById("senha1").value;
  
    if (username !== "" && password !== "") {
      window.location.href = "index.html"; 
    } else {
  
      alert("Preencha todos os campos!");
  
      }
    });
  });


  document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("rg-form");
    
    form.addEventListener("submit", function(event) {
      event.preventDefault(); 
    
      const username = document.getElementById("nm-usuario").value;
      const email = document.getElementById("email").value;
      const password = document.getElementById("senha").value;
    
      if (username !== "" && email != "" && password !== "") {
        window.location.href = "index.html"; 
      } else {
    
        alert("Preencha todos os campos!");
    
        }
      });
    });

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

    // Salvando o registro
    registerForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const nome = document.getElementById("nm-usuario").value.trim();
        const email = document.getElementById("email").value.trim();
        const senha = document.getElementById("senha").value.trim();

        if (nome && email && senha) {
            localStorage.setItem("user", JSON.stringify({ nome, email, senha }));
            alert("Usuário cadastrado com sucesso!");
        } else {
            alert("Preencha todos os campos.");
        }
    });

    // Validação de login
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const nomeLogin = document.getElementById("nm-usuario1").value.trim();
        const senhaLogin = document.getElementById("senha1").value.trim();
        const user = JSON.parse(localStorage.getItem("user"));

        if (user && user.nome === nomeLogin && user.senha === senhaLogin) {
            alert("Login bem-sucedido!");
            localStorage.setItem("isLoggedIn", "true");
            window.location.href = "index.html"; // Redireciona para a página inicial
        } else {
            alert("Nome ou senha incorretos.");
        }
    });
});