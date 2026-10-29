
let form = document.getElementById('formulario');
let txCodigoViaje = document.getElementById('txCodigoViaje');
let txMatricula = document.getElementById('txMatricula');
let txCiudadOrigen = document.getElementById('txCiudadOrigen');
let txCiudadDestino = document.getElementById('txCiudadDestino');
let txEstadoViaje = document.getElementById('txEstadoViaje');
let resultado = document.getElementById('resultado');


form.addEventListener('submit', function (e) {
  // Evitamos que la página se recargue
  e.preventDefault();
  clasificarViaje();
});

function clasificarViaje() {
  // Guardamos el estado elegido
  let estado = txEstadoViaje.value;
  let mensaje = '';

  // Mensaje distinto según el estado del viaje
  switch (estado) {
    case 'pendiente':
      mensaje = 'El viaje todavía no ha sido asignado.';
      break;
    case 'asignado':
      mensaje = 'El viaje tiene recursos asignados y está preparado.';
      break;
    case 'en_ruta':
      mensaje = 'El camión se encuentra realizando el trayecto.';
      break;
    case 'entregado':
      mensaje = 'El viaje ha finalizado correctamente.';
      break;
    case 'incidencia':
      mensaje = 'El viaje requiere atención.';
      break;
    default:
      mensaje = 'Estado de viaje no reconocido.';
      break;
  }

  // Mostramos el mensaje en la página
  resultado.textContent = mensaje;
}