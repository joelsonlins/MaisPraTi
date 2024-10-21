const mensagemErro = document.querySelector("#alerta")
function limpa_formulario() {
  //limpa valores do formulário
  document.querySelector("#endereco").value = "";
  document.querySelector("#bairro").value = "";
  document.querySelector("#cidade").value = "";
  document.querySelector("#estado").value = "";
}

function meu_callback(conteudo) {
  if (!("erro" in conteudo)) {
    //atualiza os campos com valores.
    document.querySelector("#endereco").value = conteudo.logradouro;
    document.querySelector("#bairro").value = conteudo.bairro;
    document.querySelector("#cidade").value = conteudo.localidade;
    document.querySelector("#estado").value = conteudo.uf;
  } else {
    //CEP não encontrado
    limpa_formulario();
    mensagemErro.innerHTML = "CEP não encontrado"
    //alert("CEP não encontrado.");
  }
}

function pesquisacep(valor) {
  //nova variável 'cep' somente com dígitos
  var cep = valor.replace(/\D/g, "");

  //verifica se camp cep possui  valor informado
  if (cep != "") {
    //expressão regular para validar o cep
    var validacep = /^[0-9]{8}$/;

    //valid o formado do cep
    if (validacep.test(cep)) {
      //preenche os campos com "..." enquanto consulta webservice
      document.querySelector("#endereco").value = "...";
      document.querySelector("#bairro").value = "...";
      document.querySelector("#cidade").value = "...";
      document.querySelector("#estado").value = "...";

      //cria um elemento javascript
      var script = document.createElement('script');

      //sincroniza com o callback
      script.src =
        "https://viacep.com.br/ws/" + cep + "/json/?callback=meu_callback";

      //Insere script no documento e carrega o conteúdo
      document.body.appendChild(script);
    } else {
      //cep inválido
      limpa_formulario();
      alert("Formato de CEP inválido");
    }
  } else {
    //cep sem valor, limpa formulário
    limpa_formulario();
  }
}
