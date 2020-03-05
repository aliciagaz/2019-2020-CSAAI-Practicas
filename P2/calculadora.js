console.log("Ejecutando JS...");

display = document.getElementById("display")
igual = document.getElementById("igual")
clear_todo = document.getElementById("clear_todo")
clear_anterior = document.getElementById("clear_anterior")


let digitos = document.getElementsByClassName("cdigito");

for (i=0; i<digitos.length; i++){
  digitos[i].onclick = (ev)=>{
    digito(ev.target);
  }
}

function digito(boton) {
  if (display.innerHTML =="0") {
    display.innerHTML = boton.value;
    }else{
      display.innerHTML += boton.value;
  }
}

//-- Insertar simbolo de sumar
suma.onclick = () => {
  display.innerHTML += suma.value;
}

//-- Insertar simbolo de restar
resta.onclick = () => {
  display.innerHTML += resta.value;
}

//-- Insertar simbolo de multiplicacion
multiplicacion.onclick = () => {
  display.innerHTML += multiplicacion.value;
}

//-- Insertar simbolo de division
division.onclick = () => {
  display.innerHTML += division.value;
}

//-- Evaluar la expresion
igual.onclick = () => {
  display.innerHTML = eval(display.innerHTML);
}

//-- Quitar el ultimo numero (C)


//-- Poner a cero la expresion (AC)
clear.onclick = () => {
  display.innerHTML = "0";
}
