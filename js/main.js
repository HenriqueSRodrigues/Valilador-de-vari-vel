$(document).ready(function () {
  // $("#validar").click(function () {
  function validaBoolean() {
    let primeiroValor = $("#primeiroValor").val();
    let segundoValor = $("#segundoValor").val();
    if (primeiroValor == "true") {
      primeiroValor = Boolean(true);
    } else if (primeiroValor == "false") {
      primeiroValor = Boolean(false);
    }
    console.log(primeiroValor);
    console.log(typeof primeiroValor);

    if (segundoValor == "true") {
      segundoValor = Boolean(true);
    } else if (segundoValor == "false") {
      segundoValor = Boolean(false);
    }
    console.log(segundoValor);
    console.log(typeof segundoValor);
  }
  function validaNumero() {
    let primeiroValor = $("#primeiroValor").val();
    let segundoValor = $("#segundoValor").val();
    if (primeiroValor == !isNaN(true)) {
      primeiroValor = Number.parseInt(primeiroValor);
    }
    if (segundoValor == !isNaN(true)) {
      segundoValor = Number.parseInt(segundoValor);
    }
  }
  $("#validar").click(function () {
    validaBoolean();
    validaNumero();
  });
  //   $("#validar").click(function () {
  //     console.log(typeof primeiroValor);
  //     if (primeiroValor === segundoValor) {
  //       console.log("Extritamente igual");
  //     } else if (primeiroValor == segundoValor) {
  //       console.log("Igual");
  //     } else if (primeiroValor != segundoValor) {
  //       console.log("Diferente");
  //     } else if (primeiroValor !== segundoValor) {
  //       console.log("Extritamente diferente");
  //     }
});
