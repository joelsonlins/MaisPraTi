// let serie = {
//   nome: "The Boys",
//   genero: ["Ação", "Comédia", "Ficção"],
//   nrTemporada: 4,
//   status: "Em andamento",
//   classificacao: 18,
//   nrEpisodio: {
//     temp1: 10,
//     temp2: 10,
//     temp3: 14,
//   },
//   mostrarCaracteristicas: function () {
//     return `O nome da série é: ${this.nome} e sua classificação é +${this.classificacao}`;
//   },
// };

let livro = {
  titulo: "Manhã e Noite com Deus pai",
  autor: "Charles H. Spurgeon",
  paginas: 760,
  editora: "Estação da Fé",
  ler: function () {
    return `Lendo ${this.titulo} de ${this.autor}`;
  },
};

// let carro = {
//     marca: "Toyota",
//     modelo: "Corolla",
//     ano: 2022,
//     mostrarDetalhes: function() {
//         return `Carro: ${this.marca} ${this.modelo}, Ano: ${this.ano}`;
//     }
// };

// console.log(livro.ler());
// console.log(serie.mostrarCaracteristicas());
// console.log(carro.mostrarDetalhes());

// let atleta = {
//   nome: "Rayssa Leal",
//   esporte: "Skate Street",
//   idade: 16,
// };

// atleta.nacionalidade = "Brasil";
// atleta.medalhas = {
//   ouro: 10,
//   prata: 1,
//   bronze: 1,
// };

// atleta.celebrarVitoria = () => {
//   return "GANHEI!";
// };

// // console.log(atleta)
// // console.log(atleta.celebrarVitoria())

// let obj1 = {
//   nome: "Bruce",
//   profissao: "Batman",
// };

// let obj2 = obj1;

// obj2.companheiro = "Robin";

// console.log(obj1)
// console.log(obj2)

// function computador(processador, gpu, ram, armazenamento) {
//   this.processador = processador;
//   this.gpu = gpu;
//   this.ram = ram;
//   this.armazenamento = armazenamento;

//   this.ligar = function () {
//     console.log(`O ${this.processador} está funcionando!`);
//   };

//   this.mostrarEspecificacoes = function () {
//     return `Processador: ${this.processador}, GPU: ${this.gpu}, RAM:
//             ${this.ram}, Armazenamento: ${this.armazenamento}`;
//   };
// }

// let pc = new computador("i9", "RTX4090", "16GB", "500GB SSD");
// // console.log(pc.mostrarEspecificacoes())

// function jogos(titulo, genero, anoLancamento, empresa, funcao) {
//   return {
//     titulo,
//     genero,
//     anoLancamento,
//     empresa,
//     jogar: funcao,
//   };
// }
// let jogo1 = jogos("Final Fantasy", "RPG", "1997", "Square Soft", () =>
//   console.log("Jogando")
// );
// // jogo1.jogar();

// let carros = {
//     modelo: "Buggati",
//     ano: 2010,
//     cor:"Laranja"
// }

// for(let key in jogo1){
// console.log(`${key}:${jogo1[key]}`)
// }

// const jogadores = [['Pelé','Romário'], 'CR7', 'Messi']

// for(let key in jogadores){
//     console.log(jogadores[key])
// }

// for(let jogador of jogadores){
//     console.log(jogador)
// }

// const NOME = 'Silva'

// for(let char of NOME){
//     console.log(char)
// }

// for(let jogo of Object.keys(jogo1)){
// console.log(jogo1[jogo])
// }

for (let key of Object.keys(livro)) {
  console.log(`${key}: ${livro[key]}`);
}

// for (let prop in livro) {
//   console.log(`${prop}: ${livro[prop]}`);
// }
