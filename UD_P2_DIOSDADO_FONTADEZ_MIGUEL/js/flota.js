let camiones = [
    { matricula: '1234ABC', marca: 'Volvo', modelo: 'FH', km: 235000, estado: 'en_ruta' },
    { matricula: '2345BCD', marca: 'Scania', modelo: 'R450', km: 180000, estado: 'disponible' },
    { matricula: '3456CDE', marca: 'Mercedes', modelo: 'Actros', km: 300000, estado: 'disponible' },
    { matricula: '4567DEF', marca: 'MAN', modelo: 'TGX', km: 150000, estado: 'disponible' },
    { matricula: '5678EFG', marca: 'DAF', modelo: 'XF', km: 220000, estado: 'en_ruta' },
    { matricula: '6789FGH', marca: 'Iveco', modelo: 'Stralis', km: 200000, estado: 'disponible' },
    { matricula: '7890GHI', marca: 'Renault', modelo: 'T', km: 250000, estado: 'disponible' },
    { matricula: '8901HIJ', marca: 'Volvo', modelo: 'FH16', km: 270000, estado: 'disponible' },
    { matricula: '9012IJK', marca: 'Scania', modelo: 'S730', km: 190000, estado: 'disponible' },
    { matricula: '0123JKL', marca: 'Mercedes', modelo: 'Arocs', km: 310000, estado: 'disponible' }
];

let disponibles = 0;
let enRuta = 0;
let mantenimiento = 0;
let kmTotales = 0;

let texto = '';

for (let i = 0; i < camiones.length; i++) {
    let camion = camiones[i];
    let estadoTexto = '';

    if (camion.estado === 'disponible') {
        disponibles++;
        estadoTexto = 'Disponible';
    } else if (camion.estado === 'en_ruta') {
        enRuta++;
        estadoTexto = 'En ruta';
    } else if (camion.estado === 'mantenimiento') {
        mantenimiento++;
        estadoTexto = 'En mantenimiento';

    }

    kmTotales = kmTotales + camion.km;

    texto += 'Matrícula: ' + camion.matricula + '<br>';
    texto += 'Modelo: ' + camion.marca + ' ' + camion.modelo + '<br>';
    texto += 'Kilómetros: ' + camion.km + '<br>';
    texto += 'Estado: ' + estadoTexto + '<br><br>';


}

if (mantenimiento > 3) {
    document.getElementById('mensaje').innerHTML = 'Atención: revisar disponibilidad de flota.';
} else if (mantenimiento <= 3 && mantenimiento > 0) {
    document.getElementById('mensaje').innerHTML = 'Mantenimiento dentro de los niveles previstos.';
} else if (mantenimiento === 0) {
    document.getElementById('mensaje').innerHTML = 'Flota disponible sin vehículos en mantenimiento.';
}


let kmMedios = kmTotales / camiones.length;

texto += '<hr>';
texto += 'Total de camiones: ' + camiones.length + '<br>';
texto += 'Camiones disponibles: ' + disponibles + '<br>';
texto += 'Camiones en ruta: ' + enRuta + '<br>';
texto += 'Camiones en mantenimiento: ' + mantenimiento + '<br>';
texto += 'Kilómetros totales: ' + kmTotales + '<br>';
texto += 'Kilómetros medios: ' + kmMedios + '<br><br>';

document.getElementById('resultado').innerHTML = texto;