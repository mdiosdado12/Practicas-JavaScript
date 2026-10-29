var resultado = document.getElementById("resultado");

var viajesPendientes = 8;

var viajesProcesados = 0;
var viajesCorrectos = 0;
var viajesConIncidencia = 0;

resultado.innerHTML += "<p>Viajes pendientes: " + viajesPendientes + "</p>";

while (viajesPendientes > 0) {


  viajesProcesados++;
  resultado.innerHTML += "<p>Procesando viaje " + viajesProcesados + "...</p>";

  if (Math.random() < 0.5) {
    viajesConIncidencia++;
    resultado.innerHTML += "<p> Viaje " + viajesProcesados + ": finalizado con incidencia</p>";
  } else {
    viajesCorrectos++;
    resultado.innerHTML += "<p> Viaje " + viajesProcesados + ": finalizado correctamente</p>";
  }


  viajesPendientes--;
}


resultado.innerHTML += "<p> Todos los viajes han sido procesados correctamente. </p>";
resultado.innerHTML += "<h2> Resumen </h2>";
resultado.innerHTML += "<p> Viajes procesados: " + viajesProcesados + "</p>";
resultado.innerHTML += "<p> Viajes correctos: " + viajesCorrectos + "</p>";
resultado.innerHTML += "<p> Viajes con incidencia: " + viajesConIncidencia + "</p>";