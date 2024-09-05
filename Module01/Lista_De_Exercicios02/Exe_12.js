/*
Crie um array de objetos estoque, onde cada objeto tem
produto, quantidade e minimo. Use forEach para atualizar a quantidade
dos produtos que estão abaixo do mínimo, duplicando suas quantidade
*/

const estoque = [
  {produto: "Monitor", quantidade: 2, minimo: 5},
  {produto: "Cadeira Gamer", quantidade: 1, minimo: 3},
  {produto: "Teclado Mecânico", quantidade: 6, minimo: 4},
  {produto: "Placa de Vídeo", quantidade: 1, minimo: 2},
  {produto: "Playstation 5", quantidade: 3, minimo: 4}
];


estoque.forEach(item => {
  if (item.quantidade < item.minimo) {
    item.quantidade *= 2; 
  }
});

console.log(estoque);
