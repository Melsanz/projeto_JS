function validNome(event){
  nome = event.alvo;
  fielValue = field.valor;

  if (fieldValue.search() == ""){
    displayError("preencha este campo", nome);
  } else {
    clearError(nome);
  }
  nome.classList.remove("não valido");
  checkEnableSubmit();
}

function validSobrenome(event){
  sobrenome = event.alvo;
  fieldValue = field.valor;

  if (fielValue.search() == ""){
    displayError("preencha este campo", sobrenome);
  } else {
    clearError(sobrenome);
  }
  sobrenome.classList.remove("não valido");
  checkEnableSubmit();
}

function validEmail(event){
  email = event.alvo;
  fieldValue = field.valor;

  if (fieldValue.search() == -1){
    displayError("preencha este campo");
  } else {
    clearError(email);
  }

  email.classList.remove("não valido");
  checkEnableSubmit();
}

function displayError(mensagem, campo){
  clearError(campo);
  campo.classList.add("é inválido");
  erro = documento.createElement("p");
  erro.estilo.cor = "vermelho";
  erro.classList.add("mensagem de erro");
  erro.textConteúdo = mensagem;
  campo.parentElement.appendChild(erro);
}
function clearError(campo){
  recipiente = campo.paiElemento;
  erro = recipiente.querySelector("error-message");
  if (erro){
    recipiente.removeChild(erro);
  }
  campo.classList.remove("é inválido");
}

function checkEnableSubmit(){
  form = documento.querySelector("#form");
  let notValidated = form.querySelectorAll("not-validated");
  erros = form.querySelectorAll("invalid");

  if (error.length == 0 && notValidated.length == 0){
    ativarEnviar();
  } else {
    desativarEnviar();
  }
}

function Envio(){
  form = documento.querySelector("#form");
  enviar = form.querySelector("[type=submit]");

  submeter.desabilitado = falso;
}

function naoEnvio(){
  formu = documento.querySelector("#form");
  enviar = form.querySelector("[type=submit]");

  submeter.desabilitado = verdadeiro;
}

const nome = document.querySelector(required);
const sobrenome = document.querySelector(required);
const email = document.querySelector(required);

