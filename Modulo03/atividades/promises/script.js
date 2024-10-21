function pedidoCafe(cafe) {
  const tempo = cafe === "expresso" ? 2000 : cafe === "latte" ? 3000 : null;

  if (tempo === null) {
    return Promise.reject("Café indisponível");
  }

  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(`Seu ${cafe} esta pronto!`);
    }, tempo)
  );
}

async function fazerPedido(cafe) {
  try {
    const mensagem = await pedidoCafe(cafe);
    console.log(mensagem);
  } catch (erro) {
    console.log(erro);
  }
}
fazerPedido("Cappucino");
fazerPedido("latte");
fazerPedido("expresso");
