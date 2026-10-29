#  Flota ALBOR LOGISTICS

Aplicación web sencilla en **HTML y JavaScript** que muestra el estado de la flota de camiones de ALBOR LOGISTICS.

##  Qué hace

- Recorre un array con **10 camiones** (matrícula, marca, modelo, kilómetros y estado).
- Muestra los datos de cada camión en pantalla.
- Cuenta los camiones **disponibles**, **en ruta** y **en mantenimiento**.
- Calcula los **kilómetros totales** y los **kilómetros medios** de la flota.
- Muestra un mensaje según el número de camiones en mantenimiento:

| Camiones en mantenimiento | Mensaje |
|---|---|
| Más de 3 | Atención: revisar disponibilidad de flota. |
| Entre 1 y 3 | Mantenimiento dentro de los niveles previstos. |
| Ninguno | Flota disponible sin vehículos en mantenimiento. |

##  Estructura

```
proyecto/
├── flota.html
└── js/
    └── flota.js
```

##  Cómo usarla

1. Guarda `flota.html` en la carpeta del proyecto y `flota.js` dentro de `js/`.
2. Abre `flota.html` en el navegador.

> No necesita instalación ni librerías.

##  Estados posibles de un camión

| Valor en el código | Texto mostrado |
|---|---|
| `disponible` | Disponible |
| `en_ruta` | En ruta |
| `mantenimiento` | En mantenimiento |

##  Tecnologías

- HTML5
- JavaScript (sin librerías)