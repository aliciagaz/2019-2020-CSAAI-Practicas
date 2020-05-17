console.log("Ejecutando JS...")


const gui = {
  valor: 0,
  inc: function(value)
}


//---Incremento automatico del contador
//--- cada segundo (1seg = 1000ms)

setInterval( ()=>{
  console.log("hola");
  counter.inc(1); //--- Empieza a incrementarse desde 1
}
