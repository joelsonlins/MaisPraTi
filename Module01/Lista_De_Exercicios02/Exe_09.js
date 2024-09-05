/*
Crie um array de objetos clientes, cada um com propriedades
nome, idade, e cidade. Use forEach para contar quantos clientes têm mais
de 30 anos.
*/

const clientes = [
  {nome: "João", idade: 22, cidade: "Arapiraca"},
  {nome: "Maria", idade: 35, cidade: "São Paulo"},
  {nome: "Carlos", idade: 28, cidade: "Rio de Janeiro"},
  {nome: "Ana", idade: 40, cidade: "Curitiba"},
  {nome: "Pedro", idade: 33, cidade: "Fortaleza"}
];

let clientesMaisDe30 = 0;
clientes.forEach(cliente => {
  if (cliente.idade > 30) {
    clientesMaisDe30++;
  }
});

console.log(`Número de clientes com mais de 30 anos: ${clientesMaisDe30}`);
