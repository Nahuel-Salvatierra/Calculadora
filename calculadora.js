
const Display = document.getElementById('display');

function addnum(numero) {
  Display.innerText += numero;
}

function addoperator (operador) {
  Display.innerText += operador
}
function igual () {
  Display.innerText= eval(Display.innerText)
}

function clearall() {
  Display.innerText= null;
}