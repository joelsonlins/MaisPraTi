/*
Crie um array de objetos pedidos, onde cada pedido tem
cliente, produto, e quantidade. Use forEach para criar um objeto que
agrupa a quantidade total de produtos por cliente.
*/

const pedidos = [
  {cliente: "João", produto: "Monitor", quantidade: 2},
  {cliente: "Maria", produto: "Cadeira Gamer", quantidade: 1},
  {cliente: "João", produto: "Teclado Mecânico", quantidade: 3},
  {cliente: "Ana", produto: "Placa de Vídeo", quantidade: 1},
  {cliente: "Pedro", produto: "Playstation 5", quantidade: 2},
  {cliente: "Maria", produto: "Monitor", quantidade: 1},
  {cliente: "Pedro", produto: "Cadeira Gamer", quantidade: 1}
];


let totalProdutosPorCliente = {};

pedidos.forEach(pedido => {
  if (totalProdutosPorCliente[pedido.cliente]) {
    totalProdutosPorCliente[pedido.cliente] += pedido.quantidade;
  } else {
    totalProdutosPorCliente[pedido.cliente] = pedido.quantidade;
  }
});

console.log(totalProdutosPorCliente);
