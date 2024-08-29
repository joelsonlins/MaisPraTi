/*
- Filtrando Propriedades de Objetos
Dado um objeto produto com várias propriedades, crie uma função que retorna um novo
objeto contendo apenas as propriedades cujo valor seja maior que um valor específico.
Use for in para filtrar as propriedades.
*/

const produto = {
  nome: "Caneta",
  preco: 7.99,
  estoque: 50,
  descricao: "Uma caneta de marca Bic",
};
const valor = 15;

const filtroProduto = {};
for (const key in produto) {
  if (produto[key] > valor) {
    filtroProduto[key] = produto[key];
  }
}

console.log(filtroProduto)
