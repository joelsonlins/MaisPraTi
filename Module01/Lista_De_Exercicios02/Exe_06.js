/*
Crie um array de objetos funcionarios, onde cada objeto
contém informações como nome, cargo, e salario. Use for of para filtrar
e exibir apenas os funcionários cujo salário seja maior que um valor
específico
*/
const funcionarios = [
  {nome: "joão", cargo: "Assistente Administrativo",salario: 2000},
  {nome: "Maria", cargo: "Gerente Recursos Humanos",salario: 6800},
  {nome: "Pedro", cargo: "Coordenador Administrativo",salario: 4500},
  {nome: "Henrrique", cargo: "Gerente Operacional",salario: 7000},
  {nome: "Carlos", cargo: "Diretor Geral",salario: 15000}
]


const salarioMinimo = 5000;

for (const funcionario of funcionarios) {
  if (funcionario.salario > salarioMinimo) {
    console.log(`Nome: ${funcionario.nome}, Cargo: ${funcionario.cargo}, Salário: R$${funcionario.salario}`);
  }
}