let estado = "Rojo";
let opcion = 0;

while (opcion !== 5) {
    opcion = parseInt(prompt(
        "------ MOVILIDAD SEGURA ------\n" +
        "1. Consultar acción para vehículo\n" +
        "2. Consultar acción para peatón\n" +
        "3. Avanzar estado\n" +
        "4. Mostrar estado actual\n" +
        "5. Salir\n\n" +
        "Seleccione una opción:"
    ));

    if (isNaN(opcion) || opcion < 1 || opcion > 5) {
        console.log("La opción ingresada no es válida. Inténtelo nuevamente.");
        continue;
    }

    console.log("La opción que ha seleccionado es: " + opcion);
    switch (opcion) {

        case 1:
            console.log("----- Acción para vehículo ----- ")
            switch (estado) {
                case "Rojo":
                    console.log("Instrucción: DETENERSE")
                    break;
                case "Amarillo":
                    console.log("Instrucción: PRECAUCIÓN, reducir velocidad")
                    break;
                case "Verde":
                    console.log("Instrucción: AVANZAR ")
                    break;
            }
            break;

        case 2:
            console.log("----- Acción para peatón -----")
            if (estado == "Rojo") {
                console.log("Instrucción: PUEDE CRUZAR")
            } else if (estado == "Amarillo") {
                console.log("Instrucción: PRECAUCIÓN, no inicie a cruzar")
            } else if (estado == "Verde") {
                console.log("Instrucción: NO CRUZAR, espere")
            }
            break;

        case 3:
            if (estado == "Rojo") {
                estado = "Verde";
            } else if (estado == "Verde") {
                estado = "Amarillo";
            } else if (estado == "Amarillo") {
                estado = "Rojo";
            }
            console.log("El semáforo ha cambiado de color a: " + estado)
            break;

        case 4:
            console.log("El semáforo en este momento está en color: " + estado);
            break;

        case 5:
            console.log("MOVILIDAD SEGURA SE ESTÁ CERRANDO...");
            break;

        default:
            console.log("La opción " + opcion + " no es una opción válida, por favor inténtelo de nuevo")
    }
}