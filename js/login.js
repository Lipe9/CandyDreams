// Função para exibir o formulário de login
function mostrarFormularioLogin() {
  // Aqui você pode mostrar um modal ou redirecionar para uma página de login
  // Para este exemplo, vamos simular um login bem-sucedido

  // Simulação de login
  let nomeUsuario = prompt("Digite seu nome para login:");

  if (nomeUsuario) {
    // Atualiza a interface após o login
    document.getElementById("acessar-btn").style.display = "none"; // Esconde o botão "Acessar"
    document.getElementById("usuario-info").style.display = "flex"; // Exibe o ícone de usuário com o nome

    // Exibe o nome do usuário
    document.getElementById("nome-usuario").textContent = nomeUsuario;
  }
}

// Função para simular o logout
function logout() {
  document.getElementById("acessar-btn").style.display = "inline-block"; // Mostra o botão "Acessar"
  document.getElementById("usuario-info").style.display = "none"; // Esconde o ícone de usuário
}
