const prompt = require("prompt-sync")();
/*
Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
Utilize switch-case para implementar a lógica de cada opção selecionada.
*/

let interatividade = function () {
  console.log("---------------");
  console.log("MENU INTERATIVO");
  console.log("---------------");
  console.log("  1 - Opção 1  ");
  console.log("  2 - Opção 2  ");
  console.log("  3 - Opção 3  ");
  console.log("  0 - Sair     ");
  console.log("---------------");
};

let option = -1; 

while (option !== 0) {
  interatividade();
  option = Number(prompt("Escolha uma opção: ")); 
  switch (option) {
    case 1:
      console.log("Você escolheu a opção 1");
      break;
    case 2:
      console.log("Você escolheu a opção 2");
      break;
    case 3:
      console.log("Você escolheu a opção 3");
      break;
    case 0:
      console.log("Saindo do menu...");
      break;
    default:
      console.log("Opção inválida");
      break;
  }
}
