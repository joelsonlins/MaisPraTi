/*
- Iterando Sobre Arrays de Objetos
Crie um array de objetos pessoas, onde cada objeto representa uma pessoa com nome,
idade, e cidade. Use for of para exibir as informações de cada pessoa no console.
*/
const pessoas = [
  { nome: "João", idade: 20, cidade: "São Paulo" },
  { nome: "Maria", idade: 25, cidade: "Rio de Janeiro" },
  { nome: "Pedro", idade: 30, cidade: "Belo Horizont" },
];
// let num = 1
// for (let pessoa of pessoas) {
//   console.log(`--- Pessoa Número ${num} ---`);
//   num++
//   for (let key in pessoa) {
//     console.log(key + ": " + pessoa[key]);
//   }
// }
// console.log('--- Fim da Lista ---')

let num = 1
for(let pessoa of pessoas){
    console.log(`--- Pessoa Número ${num} ---`);
    console.log(`Nome:${pessoa.nome}\nIdade:${pessoa.idade}\nCidade:${pessoa.cidade}\n`)
    num++
}
console.log('--- Fim da Lista ---')