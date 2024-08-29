/*
- Acessando Propriedades de Objetos
Crie um objeto carro com propriedades como marca, modelo, ano, e cor. 
se for in para iterar sobre as propriedades e exibir seus valores no console.
*/

const carro = {
  marca: "Fiat",
  modelo: "Uno",
  ano: 2024,
  cor: "Preto",
};
for (let prop in carro) {
  console.log(prop, carro[prop]);
}
