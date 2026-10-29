
var intentos = 0;
var maxIntentos = 3;

document.getElementById("formulario").addEventListener("submit", function (evento) {
    evento.preventDefault();

    var resultado = document.getElementById("resultado");
    var campo = document.getElementById("txcodigoEmpleado");
    var codigo = campo.value;

    // Si ya está bloqueado, no se hace nada más
    if (intentos >= maxIntentos) {
        return;
    }

    intentos++;

    if (codigo == "ALBOR001" || codigo == "ALBOR002" || codigo == "ALBOR003") {
        var perfil = "";

        switch (codigo) {
            case "ALBOR001":
                perfil = "Administrador";
                break;
            case "ALBOR002":
                perfil = "Operador";
                break;
            case "ALBOR003":
                perfil = "Gestor de tráfico";
                break;
        }

        resultado.innerHTML = "<strong> ACCESO AUTORIZADO </strong><br>" +
            "Bienvenido al panel de operaciones.<br><br>" +
            "Empleado: " + codigo + "<br>" +
            "Perfil: " + perfil + "<br>" +
            "Intentos utilizados: " + intentos;
    } else if (intentos >= maxIntentos) {
        resultado.innerHTML = "<strong>ACCESO BLOQUEADO</strong><br>" +
            "Acceso bloqueado. Se ha superado el número máximo de intentos.";
    } else {
        resultado.innerHTML = "Código incorrecto. Intentos fallidos: " + intentos + " de " + maxIntentos;
        campo.value = "";
    }
});