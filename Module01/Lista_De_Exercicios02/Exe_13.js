/*
Crie um objeto carrinho com uma propriedade itens, que é um
array de objetos. Cada objeto dentro de itens deve representar um
produto no carrinho, com nome, quantidade, e precoUnitario. Use forEach
para calcular o valor total do carrinho.
*/

const carrinho = {
  itens: [
    { nome: "Monitor", quantidade: 2, precoUnitario: 1699 },
    { nome: "Cadeira Gamer", quantidade: 1, precoUnitario: 999 },
    { nome: "Teclado Mecânico", quantidade: 3, precoUnitario: 199 },
    { nome: "Placa de Vídeo", quantidade: 1, precoUnitario: 2269 },
    { nome: "Playstation 5", quantidade: 2, precoUnitario: 3533 },
  ],
};


let valorTotalCarrinho = 0;

carrinho.itens.forEach((item) => {
  valorTotalCarrinho += item.quantidade * item.precoUnitario;
});

console.log(`Valor total do carrinho: R$${valorTotalCarrinho.toFixed(2)}`);
