console.log("Ejecutando JS...");

//----- Obtener elemento de video y configurarlo
//-- VIDEO 1
const video1 = document.getElementById("video1")
video1.width = 300;  //-- Tamaño de la pantalla de video
video1.height = 150;

//-- VIDEO 2
const video2 = document.getElementById("video2")
video2.width = 300;  //-- Tamaño de la pantalla de video
video2.height = 150;

//-- VIDEO 3
const video3 = document.getElementById("video3")
video3.width = 300;  //-- Tamaño de la pantalla de video
video3.height = 150;

//-- VIDEO 4 - SEÑAL QUE SE VA A EMITIR
const video_emision = document.getElementById("video_emision")
video_emision.width = 600;  //-- Tamaño de la pantalla de video
video_emision.height = 300;

//-- IMAGEN ESTÁTICA
const img_estatica = document.getElementById("img_estatica");


//-- Imagen estática a mostrar cuando el video no
//-- ha arrancado
video1.poster = "https://github.com/myTeachingURJC/2019-2020-CSAAI/raw/master/L10/test.png";
video2.poster = "https://github.com/myTeachingURJC/2019-2020-CSAAI/raw/master/L10/test.png";
video3.poster = "https://github.com/myTeachingURJC/2019-2020-CSAAI/raw/master/L10/test.png";

//-- BOTONES DE LA IMAGEN 1

const sel1 = document.getElementById("sel1")

//-- Función de retrollamada del botón de seleccionar
sel1.onclick = () => {
  console.log("Pinchamos el canal 1!");
  video1.src="https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente1.mp4"
  video1.play();
  video_emision.src = video1.src;
  video_emision.play();

  //-- Seleccionar el borde del video que está en emisión
  video1.style.border = "solid #8E1451 10px";
  video2.style.border = "";
  video3.style.border = "";
  img_estatica.style.border = "";

  //-- Silenciar el audio de los otros vídeos no seleccionados
  video2.muted= true;
  video3.muted= true;
};


//-- BOTONES DE LA IMAGEN 2

const sel2 = document.getElementById("sel2")

//-- Función de retrollamada del botón de seleccionar
sel2.onclick = () => {
  console.log("Pinchamos el canal 2!");
  video2.src="https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente2.mp4"
  video2.play();
  video_emision.src = video2.src;
  video_emision.play();

  //-- Seleccionar el borde del video que está en emisión
  video1.style.border = "";
  video2.style.border = "solid #8E1451 10px";
  video3.style.border = "";
  img_estatica.style.border = "";

  //-- Silenciar el audio de los otros vídeos no seleccionados
  video1.muted= true;
  video3.muted= true;
};


//-- BOTONES DE LA IMAGEN 3

const sel3 = document.getElementById("sel3")

//-- Función de retrollamada del botón de seleccionar
sel3.onclick = () => {
  console.log("Pinchamos el canal 3!");
  video3.src="https://gsyc.urjc.es/jmplaza/csaai/realizador-fuente3.mp4"
  video3.play();
  video_emision.src = video3.src;
  video_emision.play();

  //-- Seleccionar el borde del video que está en emisión
  video1.style.border = "";
  video2.style.border = "";
  video3.style.border = "solid #8E1451 10px";
  img_estatica.style.border = "";

  //-- Silenciar el audio de los otros vídeos no seleccionados
  video1.muted= true;
  video2.muted= true;
};


//-- BOTONES DE LA IMAGEN ESTÁTICA

const imagen_estatica = document.getElementById("sel4")

//-- Función de retrollamada del botón de seleccionar
imagen_estatica.onclick = () => {
  console.log("EMISIÓN EN PRUEBAS");
  video_emision.src = null;
  video_emision.poster = img_estatica.src;

  //-- Seleccionar el borde del video que está en emisión
  video1.style.border = "";
  video2.style.border = "";
  video3.style.border = "";
  img_estatica.style.border = "solid #8E1451 10px";

  //-- Silenciar el audio de los otros vídeos no seleccionados
  video1.muted= true;
  video2.muted= true;
  video3.muted= true;
};
