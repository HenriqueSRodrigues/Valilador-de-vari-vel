function validaTipo(valorCampo) {
  var valorTipado;
  if (valorCampo == "") {
    valorTipado = null;
  } else if (valorCampo == "true" || valorCampo == "false") {
    valorTipado = valorCampo == "true";
  } else if (!isNaN(valorCampo)) {
    valorTipado = Number.parseFloat(valorCampo);
  } else {
    valorTipado = valorCampo;
  }
  return valorTipado;
}

function valida(primeiroValor, segundoValor) {
  var operador = $("#seletor").val();
  let resultado;
  if (operador == "==") {
    resultado = primeiroValor == segundoValor;
  } else if (operador == "!=") {
    resultado = primeiroValor != segundoValor;
  } else if (operador == "===") {
    resultado = primeiroValor === segundoValor;
  } else if (operador == "!==") {
    resultado = primeiroValor !== segundoValor;
  }
  return resultado;
}
function tabela(valores, tipos, resultado) {
  var tabela = $(".tabela").find("tbody");
  let linha =
    "<tr>" +
    "<td>" +
    valores +
    "</td>" +
    "<td>" +
    tipos +
    "</td>" +
    "<td>" +
    resultado +
    "</td>" +
    "</tr>";
  tabela.prepend(linha);
}

$("#validar").click(function () {
  var operador = $("#seletor").val();
  var primeiroValor = validaTipo($("#primeiroValor").val());
  var segundoValor = validaTipo($("#segundoValor").val());
  let valores = primeiroValor + operador + segundoValor;
  let resultado = valida(primeiroValor, segundoValor);
  tabela(
    valores,
    typeof primeiroValor + "   " + typeof segundoValor,
    resultado
  );
});
