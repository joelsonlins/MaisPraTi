const botaoAdicionar = document.getElementById('adicionar');
const botaoRemover = document.getElementById('remover');
const lista = document.getElementById('lista');
const titulo = document.getElementById('titulo')

function addItem() {
  const li = document.createElement('li');
  li.textContent = `Item ${lista.children.length + 1}`;
  lista.appendChild(li);
  titulo.innerHTML = "Item adicionado"
  titulo.style.color = 'blue'
}

function removeItem() {
  if (lista.children.length > 0) {
    lista.removeChild(lista.lastElementChild);
    titulo.innerHTML = "Item removido"
    titulo.style.color = 'red'
  }else if (lista.children.length <= 0){
    titulo.innerHTML = "Lista vazia"
    titulo.style.color = 'green'
  }
}

botaoAdicionar.addEventListener('click', addItem);
botaoRemover.addEventListener('click', removeItem);
