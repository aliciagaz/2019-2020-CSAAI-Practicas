console.log("Ejecutando JS...");

display = document.getElementById("display")
suma = document.getElementById("suma")
igual = document.getElementById("igual")
clear = document.getElementById("clear")


// Vamos a crearnos un array de digitos.
//Tiene que crear un array con todos los que me haya definido.
let digitos = document.getElementsByClassName("cdigito");

for (i=0; i<digitos.length; i++){
  digitos[i].onclick = (ev)=>{
    digito(ev.target);
  }
}

//Con este for nos podemos cepillar lo de insertar digito1
//e insertar digito2.
// Es una funcion que hace como bucle para todos los botones

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

//-- Evaluar la expresion
igual.onclick = () => {
  display.innerHTML = eval(display.innerHTML);
}

//-- Poner a cero la expresion
clear.onclick = () => {
  display.innerHTML = "0";
}
