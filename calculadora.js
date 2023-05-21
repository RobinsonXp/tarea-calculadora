//const displayValorAnterior = document.getElementById('valor-anterior');
const displayValorActual = document.querySelector('.calculator__display');
const botonesNumeros = document.querySelectorAll('.numero');
const botonesOperadores = document.querySelectorAll('.key--operator');
const botonIgual = document.querySelector('.key--equal');
const botonBorrar = document.querySelector('.key--clear');

let valorActual = "";
let valorAnterior = "";
let operador = "";

botonesNumeros.forEach(boton => {
  boton.addEventListener('click', () => agregarNumero(boton.innerHTML));
});

botonesOperadores.forEach(boton => {
  boton.addEventListener('click', () => agregarOperador(boton.dataset.action));
});

botonIgual.addEventListener('click', () => operacion());

botonBorrar.addEventListener('click', () => {
  inicializarValores();
  displayValorActual.textContent = "0";
});

function agregarNumero(numero) {

  if (operador === "") {
    if (numero === '.' && valorActual.includes('.')) return;
    valorActual = valorActual.toString() + numero.toString();
    console.log('valorActual: ' + valorActual);

  } else {
    if (numero === '.' && valorAnterior.includes('.')) return;
    valorAnterior = valorAnterior.toString() + numero.toString();
    console.log('valorAnterior: ' + valorAnterior);
  }

  imprimirValores();
}

function imprimirValores() {
  displayValorActual.textContent = valorActual + operador + valorAnterior;
  //this.displayValorAnterior.textContent = `${this.valorAnterior} ${this.signos[this.tipoOperacion] || ''}`;
}

function agregarOperador(accion) {
  if (operador === "") {
    if (valorActual === "") return;
    let variable = accion.toString().toUpperCase();

    switch (variable) {
      case "SUMAR":
        operador = "+";
        break;
      case "RESTAR":
        operador = "-";
        break;
      case "MULTIPLICAR":
        operador = "*";
        break;
      default:
        operador = "/";
        break;
    }

    //if (valorActual==="" && variable!=="RESTAR") return;

    //if (valorActual!=="" && valorAnterior!=="") return;
    /*
    if (variable === "SUMAR") {
      operador = "+";
    } else if (variable === "RESTAR") {
      operador = "-";
    } else if (variable === "MULTIPLICAR") {
      operador = "*";
    } else {
      operador = "/";
    }*/

    imprimirValores();
  }
}

function operacion() {
  if (operador == "" || valorActual === "" || valorAnterior === "") return;

  switch (operador) {
    case "+":
      imprimirResultado(sumar());
      break;
    case "-":
      imprimirResultado(restar());
      break;
    case "*":
      imprimirResultado(multiplicar());
      break;
    default:
      imprimirResultado(dividir());
      break;
  }

  // if (operador === "+") {
  //   imprimirResultado(sumar());
  // } else if (operador === "-") {
  //   imprimirResultado(restar());
  //   restar();
  // } else if (operador === "*") {
  //   imprimirResultado(multiplicar());
  // } else {
  //   imprimirResultado(dividir());
  // }

  inicializarValores();

}

function sumar() {
  return parseFloat(valorActual) + parseFloat(valorAnterior);
}

function restar() {
  return parseFloat(valorActual) - parseFloat(valorAnterior);
}

function multiplicar() {
  return parseFloat(valorActual) * parseFloat(valorAnterior);
}

function dividir() {
  return parseFloat(valorActual) / parseFloat(valorAnterior);
}

function imprimirResultado(resultado) {
  displayValorActual.textContent = resultado;
}

function inicializarValores() {
  valorActual = "";
  valorAnterior = "";
  operador = "";
}