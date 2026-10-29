# Clasificador de Viajes

Pequeña aplicación web que muestra un mensaje distinto según el estado de un viaje de transporte. Está hecha con HTML y JavaScript, sin dependencias ni servidor.

## Funcionamiento

1. El usuario rellena el formulario con los datos del viaje.
2. Al pulsar **Enviar**, JavaScript evita que la página se recargue.
3. Se lee el **estado del viaje** seleccionado y se muestra debajo del formulario el mensaje correspondiente.

### Estados y mensajes

| Estado | Mensaje mostrado |
|---|---|
| Pendiente | El viaje todavía no ha sido asignado. |
| Asignado | El viaje tiene recursos asignados y está preparado. |
| En ruta | El camión se encuentra realizando el trayecto. |
| Entregado | El viaje ha finalizado correctamente. |
| Incidencia | El viaje requiere atención. |
| (sin seleccionar) | Estado de viaje no reconocido. |

## Campos del formulario

- Código de viaje
- Matrícula
- Ciudad de origen
- Ciudad de destino
- Estado del viaje (desplegable)

Actualmente solo el **estado del viaje** influye en el resultado. El resto de campos se recogen pero no se procesan.

## Estructura del proyecto

```
proyecto/
├── clasificador-viajes.html
├── README.md
└── Js/
    └── app.js
```

- `clasificador-viajes.html`: formulario y estructura de la página.
- `Js/app.js`: lógica de clasificación (función `clasificarViaje()` con un `switch`).

## Cómo usarlo

1. Descarga o clona el proyecto.
2. Abre `clasificador-viajes.html` en el navegador.
3. Rellena el formulario, elige un estado y pulsa **Enviar**.

El botón **Cancelar** vuelve a `clasificador-viajes.html`, lo que reinicia el formulario.

## Tecnologías

- HTML5
- JavaScript (DOM y eventos)