/*
Objetivo: Calcular a média das notas dos alunos de um professor e verificar se está acima da média de aprovação. Use um loop for ..in
para iterar sobre as propriedades dentro de professor.grades.
imprima se o professor está acima da média de aprovação(considerando 6.0 como média)
*/

// let professor = {
//     name: "Tony Stark",
//     subject: "Physics",
//     grades: {
//         student1: [10.0, 8.0],
//         student2: 8.0,
//         student3: 7.0
//     }
// }

// let sumGrades = 0
// let numberOfStudents = 0

// for(let student in professor.grades){
//     sumGrades += professor.grades[student]
//     numberOfStudents++
// }

// let average = sumGrades / numberOfStudents

// console.log(A nota média da turma é: ${average.toFixed(2)})
// console.log(average >= 6
//     ? ${professor.name} está acima da média.
//     : ${professor.name} está abaixo da média
//     )
/*
Objetivo: Verificar e listar livros publicados antes de 2000.
Use um loop for...of para iterar sobre o array biblioteca.
Imprima o título e o ano dos livros que atendem a essa condição
*/

// const biblioteca = [
//   { titulo: "O Mundo de Sofia", autor: "Jostein Gaarder", ano: 1991 },
//   { titulo: "O Código Da Vinci", autor: "Dan Brown", ano: 2003 },
//   { titulo: "1984", autor: "George Orwell", ano: 1949 },
//   { titulo: "A Revolução dos Bichos", autor: "George Orwell", ano: 1945 },
//   {
//     titulo: "Harry Potter e a Pedra Filosofal",
//     autor: "J.K. Rowling",
//     ano: 1997,
//   },
//   { titulo: "A Menina que Roubava Livros", autor: "Markus Zusak", ano: 2005 },
// ];

// for (const livro of biblioteca) {
//   if (livro.ano < 2000) {
//     console.log(Título: ${livro.titulo}, Ano: ${livro.ano});
//   }
// }

/*
    Objetivo: Contar a quantidade de filmes por gênero.
    Use o método forEach para iterar sobre o array filmes.
    Para cada filme, verifique se o gênero já existe no objeto de contagem. 
    Se existir, incremente a contagem; se não, adicione o gênero ao objeto com a contagem inicial de 1.
*/

// Array de objetos representando os filmes
// Array de objetos representando os filmes
const filmes = [
    { titulo: "Interestelar", genero: "Ficção Científica" },
    { titulo: "Xuxa e os Doendes", genero: "Infantil" },
    { titulo: "Batman: O Cavaleiro das Trevas", genero: "Ação" },
    { titulo: "Divertidamente", genero: "Infantil" },
    { titulo: "Matrix", genero: "Ficção Científica" },
    { titulo: "Senhor dos Anéis", genero: "Fantasia" },
    { titulo: "O Senhor dos Anéis: As Duas Torres", genero: "Fantasia" },
    { titulo: "O ultimo Homem", genero: "Ação" }
];

const contagemPorGenero = {};

filmes.forEach(filme => {
    if (contagemPorGenero[filme.genero]) {
        contagemPorGenero[filme.genero]++;
    } else {
        contagemPorGenero[filme.genero] = 1;
    }
});

for(let genero in contagemPorGenero){
    console.log(`Existem ${contagemPorGenero[genero]} filmes do gênero ${genero}`);
}


// console.log(contagemPorGenero);

/*
for(let genre in genreCount){
    console.log(Existem ${genreCount[genre]} filmes do gênero ${genre})
}
*/