// Selecionando o formulário e elementos necessários
const form = document.querySelector("form");
const emailInput = document.getElementById("email");
const senhaInput = document.getElementById("senha");

// Função de validação do formulário
function validateForm(event) {
  event.preventDefault(); // Evita o envio do formulário sem validação

  const email = emailInput.value.trim();
  const senha = senhaInput.value.trim();

  // Validação de e-mail
  if (!email || !/\S+@\S+\.\S+/.test(email)) {
    alert("Por favor, insira um e-mail válido.");
    return;
  }

  // Validação de senha
  if (!senha || senha.length < 6) {
    alert("A senha deve ter pelo menos 6 caracteres.");
    return;
  }

  // Aqui você pode adicionar a lógica para enviar o formulário, como uma requisição para o servidor
  alert("Login bem-sucedido!");
  form.reset(); // Limpa os campos do formulário após login bem-sucedido
}

// Evento para enviar o formulário
form.addEventListener("submit", validateForm);
