console.log("Ejecutando JS...");

display = document.getElementById("display")
igual = document.getElementById("igual")
clear_todo = document.getElementById("clear_todo")
clear_anterior = document.getElementById("clear_anterior")

//-- Crea un array con todos los tipos de digitos
let digitos = document.getElementsByClassName("cdigito");
console.log(digitos)
//-- Crea un array con todos los tipos de operaciones
let operaciones = document.getElementsByClassName("operador");

//-- Estados de la Calculadora
const ESTADO = {
  INIT: 0,
  OP1: 1,
  OPERATION: 2,
  OP2_INIT: 3,
  OP2: 4,
}

//-- Variable del estado - donde comienza
let estado = ESTADO.INIT;

//-- Funcion que pone el display de inicio siempre a '0'
function digito(boton) {
  if (display.innerHTML =="0") {
    display.innerHTML = boton.value;
    }else{
      display.innerHTML += boton.value;
  }
}

//-- Bucle que lee cada 'digito' que se va pulsando
for (i = 0; i < digitos.length; i++){
  digitos[i].onclick = (ev)=>{
    number(ev.target);
  }
}

//-- Bucle que lee cada 'operacion' que se ha pulsado
for (i=0; i<operaciones.length; i++){
  operaciones[i].onclick = (ev)=>{
    operador(ev.target);
  }
}

//-- Evaluar la expresion
igual.onclick = () => {
  display.innerHTML = eval(display.innerHTML);
}

//-- Borrar el ultimo número de la expresion (C)
clear_anterior.onclick = () => {
  if (display.innerHTML.length != 1){
    display.innerHTML = display.innerHTML.slice(0,-1);
  } else{
    display.innerHTML = 0;
    estado = ESTADO.INIT;
  }
}

//-- Poner a cero la expresion (AC) - Borrar todo
clear.onclick = () => {
  display.innerHTML = "0";
  estado = ESTADO.INIT;
}

//-- Ha llegado un dígito
function number(num)
{
  //-- Segun el estado hacemos una cosa u otra
  if (estado == ESTADO.INIT) {
    display.innerHTML = num.value;
    estado = ESTADO.OP1;
  } else if (estado == ESTADO.OP1){
    display.innerHTML += num.value;
  } else if (estado == ESTADO.OPERATION){
    display.innerHTML += num.value;
    estado = ESTADO.OP2_INIT;
  } else if (estado == ESTADO.OP2_INIT){
    display.innerHTML += num.value;
    estado = ESTADO.OP2;
  } else if (estado == ESTADO.OP2){
    display.innerHTML += num.value;
  }
}

//-- Ha llegado un operador - COMPROBACIÓN
function operador (oper)
{
  //-- Segun el estado hacemos una cosa u otra
  if (estado != ESTADO.OPERATION){
    display.innerHTML += oper.value;
    estado = ESTADO.OPERATION;
  }
}
