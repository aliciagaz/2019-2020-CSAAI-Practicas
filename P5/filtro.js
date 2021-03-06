console.log("Ejecutando JS....")

//-- Obtener elementos del DOM
const canvas = document.getElementById('canvas');
const img = document.getElementById('imagesrc');
const ctx = canvas.getContext('2d');

//-- Deslizadores R, G y B
const deslizador_R = document.getElementById('deslizador_R');
const deslizador_G = document.getElementById('deslizador_G');
const deslizador_B = document.getElementById('deslizador_B');

//-- Valor de los deslizadores
const range_value_R = document.getElementById('range_value_R');
const range_value_G = document.getElementById('range_value_G');
const range_value_B = document.getElementById('range_value_B');

//-- FILTROS
const grises = document.getElementById("grises");
const umbral = document.getElementById("umbral");
const negativo = document.getElementById("negativo");

//-- Función de retrollamada de imagen cargada
//-- La imagen no se carga instantaneamente, sino que
//-- lleva un tiempo. Sólo podemos acceder a ella una vez
//-- que esté totalmente cargada
img.onload = function () {

  //-- Se establece como tamaño del canvas el mismo
  //-- que el de la imagen original
  canvas.width = img.width;
  canvas.height = img.height;

  //-- Situar la imagen original en el canvas
  //-- No se han hecho manipulaciones todavia
  ctx.drawImage(img, 0,0);

  console.log("Imagen lista...");
};

//--  FILTRO DE COMPONENTES RGB
//-- Funcion de retrollamada del deslizador R
deslizador_R.oninput = () => {
  //-- Mostrar el nuevo valor del deslizador
  range_value_R.innerHTML = deslizador_R.value;

  //-- Situar la imagen original en el canvas
  ctx.drawImage(img, 0,0);

  //-- Obtener la imagen del canvas en pixeles
  let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);

  //-- Obtener el array con todos los píxeles
  let data = imgData.data

  //-- Obtener el umbral de rojo del desliador
  umbral_R = deslizador_R.value

  //-- Filtrar la imagen según el nuevo umbral
  for (let i = 0; i < data.length; i+=4) {
    if (data[i] > umbral_R)
      data[i] = umbral_R;
  }

  //-- Poner la imagen modificada en el canvas
  ctx.putImageData(imgData, 0, 0);
}

//-- Funcion de retrollamada del deslizador G
deslizador_G.oninput = () => {
  //-- Mostrar el nuevo valor del deslizador
  range_value_G.innerHTML = deslizador_G.value;

  //-- Situar la imagen original en el canvas
  //-- No se han hecho manipulaciones todavia
  ctx.drawImage(img, 0,0);

  //-- Obtener la imagen del canvas en pixeles
  let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);

  //-- Obtener el array con todos los píxeles
  let data = imgData.data

  //-- Obtener el umbral de rojo del desliador
  umbral_G = deslizador_G.value

  //-- Filtrar la imagen según el nuevo umbral
  for (let i = 0; i < data.length; i += 4) {
    if (data[i + 1] > umbral_G)
      data[i + 1] = umbral_G;
  }

  //-- Poner la imagen modificada en el canvas
  ctx.putImageData(imgData, 0, 0);
}

//-- Funcion de retrollamada del deslizador B
deslizador_B.oninput = () => {
  //-- Mostrar el nuevo valor del deslizador
  range_value_B.innerHTML = deslizador_B.value;

  //-- Situar la imagen original en el canvas
  //-- No se han hecho manipulaciones todavia
  ctx.drawImage(img, 0,0);

  //-- Obtener la imagen del canvas en pixeles
  let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);

  //-- Obtener el array con todos los píxeles
  let data = imgData.data

  //-- Obtener el umbral de rojo del desliador
  umbral_B = deslizador_B.value

  //-- Filtrar la imagen según el nuevo umbral
  for (let i = 0; i < data.length; i += 4) {
    if (data[i + 2] > umbral_B)
      data[i + 2] = umbral_B;
  }

  //-- Poner la imagen modificada en el canvas
  ctx.putImageData(imgData, 0, 0);
}

//-- FILTRO ESCALA DE GRISES
grises.onclick = () => {

  //-- Situar la imagen original en el canvas
  //-- No se han hecho manipulaciones todavia
  ctx.drawImage(img, 0,0);

  //-- Obtener la imagen del canvas en pixeles
  let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  //-- Obtener el array con todos los píxeles
  let data = imgData.data

  //-- Filtrar la imagen según el nuevo umbral
  for (let i = 0; i < data.length; i += 4) {
    var grises_escala = 0.33 * data[i] + 0.5 * data [i +1] + 0.15 * data [i + 2];
    data[i] = grises_escala;
    data[i + 1] = grises_escala;
    data[i + 2] = grises_escala;
  }

  //-- Poner la imagen modificada en el canvas
  ctx.putImageData(imgData, 0, 0);
}

//-- FILTRO UMBRAL
umbral.onclick = () => {

  //-- Situar la imagen original en el canvas
  //-- No se han hecho manipulaciones todavia
  ctx.drawImage(img, 0,0);

  //-- Obtener la imagen del canvas en pixeles
  let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  //-- Obtener el array con todos los píxeles
  let data = imgData.data

  //-- Filtrar la imagen según el nuevo umbral
  for (let i = 0; i < data.length; i += 4) {
    var grises_escala = data[i] + data [i +1] + data [i + 2]/50;
    data[i] = grises_escala;
    data[i + 1] = grises_escala;
    data[i + 2] = grises_escala;
  }

  //-- Poner la imagen modificada en el canvas
  ctx.putImageData(imgData, 0, 0);
}

//-- FILTRO NEGATIVO
negativo.onclick = () => {

  //-- Situar la imagen original en el canvas
  //-- No se han hecho manipulaciones todavia
  ctx.drawImage(img, 0,0);

  //-- Obtener la imagen del canvas en pixeles
  let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  //-- Obtener el array con todos los píxeles
  let data = imgData.data

  //-- Filtrar la imagen según el nuevo umbral
  for ( var i = 0; i < data.length; i++ ) {
        var red = data[ i * 4 ];
        var green = data[ i * 4 + 1 ];
        var blue = data[ i * 4 + 2 ];

        data[ i * 4 ] = 255 - red;
        data[ i * 4 + 1 ] = 255 - green;
        data[ i * 4 + 2 ] = 255 - blue;
    }

  //-- Poner la imagen modificada en el canvas
  ctx.putImageData(imgData, 0, 0);
}

console.log("Fin...");
