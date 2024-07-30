const prompt = require("prompt-sync")();
let num = 12345
let numInter = 0
let digito = num % 10
numInter = (numInter * 10) + digito;
num = (num - (num % 10)) / 10;

// console.log(num)
console.log(numInter)
console.log(digito)