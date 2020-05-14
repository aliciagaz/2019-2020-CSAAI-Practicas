console.log("Ejecutando JS...");

//-- Obtener el objeto canvas
const canvas = document.getElementById("canvas");

//-- Sus dimensiones las hemos fijado en el fichero
//-- HTML. Las imprimimos en la consola
console.log(`canvas: Anchura: ${canvas.width}, Altura: ${canvas.height}`);

//-- Obtener el contexto para pintar en el canvas
const ctx = canvas.getContext("2d");

//-- Sonidos del juego
const sonido_raqueta = new Audio("pong-raqueta.mp3");
const sonido_rebote = new Audio("pong-rebote.mp3");
const sonido_victoria = new Audio ("musica_ganador.mp3");

//-- Estados del juego
const ESTADO = {
  INIT: 0,
  SAQUE: 1,
  JUGANDO: 2,
  FIN: 3,
}

//-- Variable de estado
//-- Arrancamos desde el estado inicial
let estado = ESTADO.INIT;

//-- Variables para los contadores del tanto
let Cont_I = 0;
let Cont_D = 0;

//-- Variable para la puntuación máxima del juego
let Punt_max = 3;


//-- Pintar todos los objetos en el canvas
function draw() {
  //----- Dibujar la Bola
  //-- Solo en el estado de jugando
  if (estado == ESTADO.JUGANDO) {
    bola.draw();
  }

  //-- Dibujar las raquetas
  raqI.draw();
  raqD.draw();

  //--------- Dibujar la red
  ctx.beginPath();

  //-- Estilo de la linea: discontinua
  //-- Trazos de 10 pixeles, y 10 de separacion
  ctx.setLineDash([10, 10]);
  ctx.strokeStyle = 'white';
  ctx.lineWidth = 2;

  //-- Punto superior de la linea. Su coordenada x está en la mitad
  //-- del canvas
  ctx.moveTo(canvas.width/2, 0);

  //-- Dibujar hasta el punto inferior
  ctx.lineTo(canvas.width/2, canvas.height);
  ctx.stroke();

  //------ Dibujar el tanteo
  ctx.font = "80px Arial";
  ctx.fillStyle = "white";
  ctx.fillText(Cont_I, 200, 80);
  ctx.fillText(Cont_D, 340, 80);

  //-- Dibujar el texto de sacar
  if (estado == ESTADO.SAQUE) {
    ctx.font = "40px Arial";
    ctx.fillStyle = "#4C148E";
    ctx.fillText("¡ Saca !", 30, 350);
  }

  //-- Dibujar el texto de comenzar
  if (estado == ESTADO.INIT) {
    ctx.font = "40px Arial";
    ctx.fillStyle = "#4C148E";
    ctx.fillText("Pulsa Start!", 30, 350);
  }
  
  //-- Dibujar el texto de finalizar
  if (estado == ESTADO.FIN){
      ctx.font = "75px Arial";
      ctx.fillStyle = "#4C148E";
      ctx.fillText("¡GAME OVER!", 50, 230);
  }
}


//---- Bucle principal de la animación
function animacion()
{

  //-- Actualizar las posiciones de los objetos móviles

  //-- Actualizar la raqueta con la velocidad actual
  raqI.update();
  raqD.update();

  //-- Comprobar si la bola ha alcanzado los límites
  //-- Si es el límite izquierdo o derecho se suma en el tanto
  //-- Si son los otros límites rebota en el sentido opuesto
  if (bola.x >= canvas.width) {
      estado = ESTADO.SAQUE;
      bola.init();
      console.log("¡¡¡ Goooooool del jugador A!!!");
      Cont_I++;
      if (Cont_I == Punt_max){
        estado = ESTADO.FIN;
        sonido_victoria.play();
      }
      //-- Reproducir sonido
      sonido_rebote.currentTime = 0;
      sonido_rebote.play();

    } else if (bola.x <= 0){
      estado = ESTADO.SAQUE;
      bola.init();
      console.log("¡¡¡ Goooooool del jugador B !!!");
      Cont_D++;
      if (Cont_D == Punt_max){
        estado = ESTADO.FIN;
        sonido_victoria.play();
      }
      //-- Reproducir sonido
      sonido_rebote.currentTime = 0;
      sonido_rebote.play();

    } else if (bola.y >= canvas.height) {
      bola.vy = bola.vy * -1;

      //-- Reproducir sonido
      sonido_rebote.currentTime = 0;
      sonido_rebote.play();

    } else if (bola.y <= 0) {
     bola.vy = bola.vy * -1;
     //-- Reproducir sonido
     sonido_rebote.currentTime = 0;
     sonido_rebote.play();
   }

  //-- Comprobar si hay colisión con la raqueta izquierda
  if (bola.x >= raqI.x && bola.x <=(raqI.x + raqI.width) &&
      bola.y >= raqI.y && bola.y <=(raqI.y + raqI.height)) {
    bola.vx = bola.vx * -1;

    //-- Reproducir sonido
    sonido_raqueta.currentTime = 0;
    sonido_raqueta.play();
  }

  //-- Comprobar si hay colisión con la raqueta derecha
  if (bola.x >= raqD.x && bola.x <=(raqD.x + raqD.width) &&
      bola.y >= raqD.y && bola.y <=(raqD.y + raqD.height) &&
      (raqD.v <= 0)) {
        bola.vx = bola.vx * -1;

        //-- Reproducir sonido
        sonido_raqueta.currentTime = 0;
        sonido_raqueta.play();
      }

  //-- Actualizar coordenada x de la bola, en funcion de
  //-- su velocidad
  bola.update()

  //-- Borrar la pantalla
  ctx.clearRect(0,0, canvas.width, canvas.height);

  //-- Dibujar el nuevo frame
  draw();

  //-- Funcón de animaciones
  window.requestAnimationFrame(animacion);

}

//-- Inicializa la bola: Llevarla a su posicion inicial
const bola = new Bola(ctx);

//-- Crear las raquetas
const raqI = new Raqueta(ctx);
const raqD = new Raqueta(ctx);

//-- Cambiar las coordenadas de la raqueta derecha
raqD.x_ini = 540;
raqD.y_ini = 300;
raqD.init();

//-- Arrancar la animación
animacion();

//-- Retrollamada de las teclas
window.onkeydown = (e) => {

  //-- En el estado inicial no se
  //-- hace caso de las teclas
  if (estado == ESTADO.INIT)
    return;

  switch (e.key) {
    case "a":
      raqI.v = raqI.v_ini;
      break;
    case "q":
      raqI.v = raqI.v_ini * -1;
      break;
    case "p":
      raqD.v = raqD.v_ini * -1;
      break;
    case "l":
      raqD.v = raqD.v_ini;
      break;
    case "s":

      //-- El saque solo funciona en el estado de SAQUE
      if (estado == ESTADO.SAQUE) {

        //-- Reproducir sonido
        sonido_raqueta.currentTime = 0;
        sonido_raqueta.play();

        //-- Llevar bola a su posicion incicial
        bola.init();

        //-- Darle velocidad
        bola.vx = bola.vx_ini;
        bola.vy = bola.vy_ini;

        //-- Cambiar al estado de jugando!
        estado = ESTADO.JUGANDO;

        return false;
      }
    //-- Volver a jugar
    case "h":
        if (estado == ESTADO.FIN){
          Cont_I = 0;
          Cont_D = 0;
          estado = ESTADO.INIT;
        }
    default:
  }
}

//-- Retrollamada de la liberacion de teclas
window.onkeyup = (e) => {
  if (e.key == "a" || e.key == "q"){
    //-- Quitar velocidad de la raqueta
    raqI.v = 0;
  }

  if (e.key == "p" || e.key == "l") {
    raqD.v = 0;
  }
}

//-- Botón de arranque
const start = document.getElementById("start");
start.onclick = () => {
  estado = ESTADO.SAQUE;
  console.log("SAQUE!");
  canvas.focus();
}

//-- Boton de stop
const stop = document.getElementById("stop");

stop.onclick = () => {
  //-- Volver al estado inicial
  estado = ESTADO.INIT;
  bola.init();
  start.disabled = false;
}
