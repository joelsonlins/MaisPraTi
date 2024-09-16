/*
Crie um objeto empresa com uma propriedade departamentos,
que é um array de objetos. Cada departamento tem um nome e uma lista
de funcionarios. Use for in e for of para iterar sobre os departamentos
e seus funcionários, exibindo o nome de cada funcionário junto com o
departamento ao qual pertence.

*/

const empresa = {
  departamentos: [
    {
      nome: "Recursos Humanos",
      funcionarios: [
        {nome: "Ana", cargo: "Gerente de RH", salario: 7000},
        {nome: "João", cargo: "Assistente de RH", salario: 3000}
      ]
    },
    {
      nome: "Tecnologia",
      funcionarios: [
        {nome: "Carlos", cargo: "Desenvolvedor Front-end", salario: 6000},
        {nome: "Maria", cargo: "Desenvolvedora Back-end", salario: 6500}
      ]
    },
    {
      nome: "Financeiro",
      funcionarios: [
        {nome: "Pedro", cargo: "Analista Financeiro", salario: 5500},
        {nome: "Luana", cargo: "Contadora", salario: 7000}
      ]
    }
  ]
};

// Iterar sobre os departamentos usando for...in
for (const i in empresa.departamentos) {
  const departamento = empresa.departamentos[i];
  console.log(`Departamento: ${departamento.nome}`);
  
  // Iterar sobre os funcionários usando for...of
  for (const funcionario of departamento.funcionarios) {
    console.log(`- Funcionário: ${funcionario.nome}, Cargo: ${funcionario.cargo}`);
  }
}
