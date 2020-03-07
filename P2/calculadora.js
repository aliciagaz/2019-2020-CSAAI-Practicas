console.log("Ejecutando JS...");

display = document.getElementById("display")
igual = document.getElementById("igual")
clear_todo = document.getElementById("clear_todo")
clear_anterior = document.getElementById("clear_anterior")

//-- Crea un array con todos los tipos de digitos
let digitos = document.getElementsByClassName("cdigito");

//-- Crea un array con todos los tipos de operaciones
let operaciones = document.getElementsByClassName("operador");

//-- Funcion que pone el display de inicio siempre a '0'
function digito(boton) {
  if (display.innerHTML =="0") {
    display.innerHTML = boton.value;
    }else{
      display.innerHTML += boton.value;
  }
}

//-- Bucle que lee cada 'digito' que se va pulsando
for (i=0; i<digitos.length; i++){
  digitos[i].onclick = (ev)=>{
    digito(ev.target);
  }
}

//-- Bucle que lee cada 'operacion' que se pulsando
for (i=0; i<operaciones.length; i++){
  operaciones[i].onclick = (ev)=>{
    digito(ev.target);
  }
}

//-- Evaluar la expresion
igual.onclick = () => {
  display.innerHTML = eval(display.innerHTML);
}

//-- Borrar el ultimo numero de la expresion (C)
clear_anterior.onclick = () => {
  display.innerHTML = display.innerHTML.slice(0,-1);
}

//-- Poner a cero la expresion (AC) - Borrar todo
clear.onclick = () => {
  display.innerHTML = "0";
}
