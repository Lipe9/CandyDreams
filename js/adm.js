document.getElementById('product-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const product = {
    name: document.getElementById('name').value,
    description: document.getElementById('description').value,
    varieties: document.getElementById('varieties').value.split(','),
    size: document.getElementById('size').value,
    weight: document.getElementById('weight').value,
    price: parseFloat(document.getElementById('price').value),
    image: '' // será preenchido após o upload
  };

  const imageInput = document.getElementById('image');
  const reader = new FileReader();
  reader.onload = function (event) {
    product.image = event.target.result;
    saveProduct(product);
  };
  reader.readAsDataURL(imageInput.files[0]);
});

function saveProduct(product) {
  let products = JSON.parse(localStorage.getItem('products')) || [];
  products.push(product);
  localStorage.setItem('products', JSON.stringify(products));
  alert('Produto adicionado com sucesso!');
  document.getElementById('product-form').reset();
}



// código do carrinho.js

window.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.produtos-container');
    container.innerHTML = ''; // limpa os produtos fixos

    const produtos = JSON.parse(localStorage.getItem('produtos')) || [];

    produtos.forEach(p => {
      const card = document.createElement('div');
      card.className = 'produto-card';
      card.innerHTML = `
        <img src="${p.imagem}" alt="${p.nome}" />
        <h3>${p.nome}</h3>
        <p>${p.descricao}</p>
        <p class="preco">R$ ${p.valor.toFixed(2)}</p>
        <p><strong>Variedades:</strong> ${p.variedades}</p>
        <p><strong>Tamanho:</strong> ${p.tamanho}</p>
        <p><strong>Peso:</strong> ${p.peso}</p>
        <button class="botao-comprar" onclick="adicionarAoCarrinho('${p.nome}', ${p.valor}, '${p.imagem}')">Comprar</button>
      `;
      container.appendChild(card);
    });
  });