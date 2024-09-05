/*
Crie um array de objetos vendas, onde cada objeto tem produto,
quantidade e valor. Use forEach para calcular o valor total de vendas de
todos os produtos.

*/
const vendas = [
  {nome: "Monitor", quantidade: 3, valor: 1699},
  {nome: "Cadeira Gamer", quantidade: 2, valor: 999},
  {nome: "Teclado Mecânico", quantidade: 5, valor: 199},
  {nome: "Placa de Vídeo", quantidade: 1, valor: 2269},
  {nome: "Playstation 5", quantidade: 4, valor: 3533}
];

let valorTotalVendas = 0;
vendas.forEach(venda => {
  valorTotalVendas += venda.quantidade * venda.valor;
});

console.log(`Valor total de vendas: R$${valorTotalVendas.toFixed(2)}`);
