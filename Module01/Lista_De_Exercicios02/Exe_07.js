/*
Crie um array de objetos produtos, onde cada objeto tem nome,
preco, e desconto. Use forEach para aplicar um desconto de 10% em todos
os produtos e exibir o novo preço.
*/
desconto_produtos = 0.1

const produtos =[
  {nome:"Monitor", preco: 1699, desconto: desconto_produtos},
  {nome:"Cadeira Games", preco: 999, desconto: desconto_produtos},
  {nome:"Teclado Mecânico", preco: 199, desconto: desconto_produtos},
  {nome:"Placa de video", preco: 2269, desconto: desconto_produtos},
  {nome:"Playstation 5", preco: 3533, desconto: desconto_produtos},
]

produtos.forEach(produto => {
  let novoPreco = produto.preco * (1 - produto.desconto);
  console.log(`Produto: ${produto.nome}, Preço original: R$${produto.preco}, Novo preço: R$${novoPreco.toFixed(2)}`);
});