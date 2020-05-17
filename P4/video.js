console.log("Ejecutando JS...");

//----- Obtener elemento de video y configurarlo
//-- VIDEO 1
const video1 = document.getElementById("video1")
video1.width = 400;  //-- Tamaño de la pantalla de video
video1.height = 200;

//-- VIDEO 2
const video2 = document.getElementById("video2")
video2.width = 400;  //-- Tamaño de la pantalla de video
video2.height = 200;

//-- VIDEO 3
const video3 = document.getElementById("video3")
video3.width = 400;  //-- Tamaño de la pantalla de video
video3.height = 200;

//-- VIDEO 4 - SEÑAL QUE SE VA A EMITIR
const video_emision = document.getElementById("video_emision")
video_emision.width = 800;  //-- Tamaño de la pantalla de video
video_emision.height = 450;

//-- Imagen estática a mostrar cuando el video no
//-- ha arrancado
video1.poster = "https://github.com/myTeachingURJC/2019-2020-CSAAI/raw/master/L10/test.png";
video2.poster = "https://github.com/myTeachingURJC/2019-2020-CSAAI/raw/master/L10/test.png";
video3.poster = "https://github.com/myTeachingURJC/2019-2020-CSAAI/raw/master/L10/test.png";


//-- BOTONES DE LA IMAGEN 1
const play1 = document.getElementById("play1")
const stop1= document.getElementById("stop1")

//-- Función de retrollamada del botón de ver
play1.onclick = () => {
  console.log("Pinchamos el canal 1!");
  video1.src="https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente1.mp4"
  video1.play();
  video_emision.src = video1.src;
  video_emision.play();
};

stop1.onclick = () => {
  video1.pause();

  //-- Quitar la fuente de video, para que se muestre la
  //-- imagen definida en el atributo poster
  video1.src = null;
}

//-- BOTONES DE LA IMAGEN 2
const play2 = document.getElementById("play2")
const stop2= document.getElementById("stop2")

play2.onclick = () => {
  console.log("Pinchamos el canal 2!");
  video2.src="https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente2.mp4"
  video2.play();
  video_emision.src = video2.src;
  video_emision.play();
};

stop2.onclick = () => {
  video2.pause();

  //-- Quitar la fuente de video, para que se muestre la
  //-- imagen definida en el atributo poster
  video2.src = null;
}

//-- BOTONES DE LA IMAGEN 3
const play3 = document.getElementById("play3")
const stop3= document.getElementById("stop3")

play3.onclick = () => {
  console.log("Pinchamos el canal 3!");
  video3.src="https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente3.mp4"
  video3.play();
  video_emision.src = video3.src;
  video_emision.play();
};

//-- Funcion de retrollamada del boton de parar
stop3.onclick = () => {
  video3.pause();

  //-- Quitar la fuente de video, para que se muestre la
  //-- imagen definida en el atributo poster
  video3.src = null;
}
