/*
Crie um array de objetos filmes, onde cada filme tem titulo,
diretor, e anoLancamento. Use forEach para criar um novo array
contendo apenas os títulos dos filmes.
*/

const filmes = [
  {titulo: "Interestelar", diretor: "Christopher Nolan", anoLancamento: 2014},
  {titulo: "Silêncio dos Inocentes", diretor: "Jonathan Demme", anoLancamento: 1991},
  {titulo: "Sem Limites", diretor: "Neil Burger", anoLancamento: 2011},
  {titulo: "John Wick", diretor: "Chad Stahelski", anoLancamento: 2014},
  {titulo: "Questão de Tempo", diretor: "Richard Curtis", anoLancamento: 2013}
];
const titulosDosFilmes = [];
filmes.forEach(filme => {
  titulosDosFilmes.push(filme.titulo);
});

console.log(titulosDosFilmes);