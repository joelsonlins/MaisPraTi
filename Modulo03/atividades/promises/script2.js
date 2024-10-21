function funcao01(resolve, reject) {
  const num = 10;
  if (num > 0) {
    resolve(`${num} maior que zero`);
  } else {
    reject(`${num} é menor que zero`);
  }
}

const minhaPromise = new Promise(funcao01);

minhaPromise
  .then((valor) => {
    console.log(valor);
  })
  .catch((valor) => {
    console.log(valor);
  });
