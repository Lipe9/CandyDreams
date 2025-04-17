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