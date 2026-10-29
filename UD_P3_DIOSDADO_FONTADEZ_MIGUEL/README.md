# Simulador de procesamiento de viajes

Pequeño script en JavaScript que simula el procesamiento de una cola de viajes y muestra el resultado en pantalla.

## Qué hace

- Parte de **8 viajes pendientes**.
- Los procesa uno a uno con un bucle `while`.
- Cada viaje termina de forma aleatoria (50 % de probabilidad):
  - **Correctamente**
  - **Con incidencia**
- Al terminar, muestra un resumen con el total de viajes procesados, correctos y con incidencia.

## Requisitos

La página HTML debe tener un elemento con `id="resultado"`, donde el script escribe la salida:

    <div id="resultado"></div>
    <script src="script.js"></script>

## Uso

1. Añade el código a un archivo `script.js`.
2. Enlázalo desde tu HTML, después del `<div id="resultado">`.
3. Abre la página en el navegador. Cada vez que la recargues, el resultado cambia porque es aleatorio.

## Variables principales

| Variable | Descripción |
|---|---|
| `viajesPendientes` | Viajes que quedan por procesar (empieza en 8) |
| `viajesProcesados` | Contador de viajes ya procesados |
| `viajesCorrectos` | Viajes finalizados sin problemas |
| `viajesConIncidencia` | Viajes finalizados con incidencia |

## Ejemplo de salida

    Viajes pendientes: 8
    Procesando viaje 1...
    Viaje 1: finalizado correctamente
    ...
    Resumen
    Viajes procesados: 8
    Viajes correctos: 5
    Viajes con incidencia: 3