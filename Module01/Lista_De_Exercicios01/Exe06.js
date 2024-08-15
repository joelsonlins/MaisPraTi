/*
Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
Isósceles, escaleno ou eqüilátero.
*/
const prompt = require('prompt-sync')();
function verificarTriangulo() {
  let a = Number(prompt("Digite o valor do lado A:"));
  let b = Number(prompt("Digite o valor do lado B:"));
  let c = Number(prompt("Digite o valor do lado C:"));
  let tipoTriangulo = "";
 
  if ((a===b) && (b===c)){
    tipoTriangulo = "Eqüilátero";
  }else if((a!=b) && (b!=c)){
    tipoTriangulo = "Escaleno";
  }else{
    tipoTriangulo = "Isósceles"
  }
  if ((a < (b+c)) && (b<(a+c) && (c<(a+b)))){
    console.log('É póssível formar um triângulo com as informações dadas.')
    console.log(`O triângulo é do tipo: ${tipoTriangulo}`)
  }else{
    console.log('Não é possível formar um triângulo com as informações dadas.');
  }
}
verificarTriangulo()


