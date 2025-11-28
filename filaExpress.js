//Creacion de variables para selección de turno de Fila express
let servicioSolicitado = "";
let tieneTurno = false;
let verificoPrioridad = false;
let esTerceraEdad = false;
let salir = false;

//Creacion del menu visible para el usuario
while (salir == false) {
    let entrada = prompt(
        "--- Bienvenido a Fila Express ---\n" +
        "1. Solicitar Turno para Caja\n" +
        "2. Solicitar Turno para Asesoría\n" +
        "3. Verificar Prioridad (Tercera Edad)\n" +
        "4. Ver Turno Asignado\n" +
        "5. Salir\n" +
        "Seleccione una opción (1-5):"
    );

    if (entrada == null || entrada == "") {
        salir = true;
        console.log("Gracias por usar Fila Express. ¡Hasta luego!");
    } else {
        let opcion = Number(entrada);

        if (opcion < 1 || opcion > 5 || isNaN(opcion)) {
            console.log("Opción inválida. Por favor, elija un número del 1 al 5.");
        } else {

            // OPCIÓN 1: Solicitar Turno para Caja
            if (opcion == 1) {
                if (tieneTurno == true) {
                    console.log("Ya tiene un turno asignado.");
                } else {
                    servicioSolicitado = "Caja";
                    tieneTurno = true;
                    console.log("Turno solicitado para Caja.");
                }
            }

            // OPCIÓN 2: Solicitar Turno para Asesoría
            if (opcion == 2) {
                if (tieneTurno == true) {
                    console.log("Ya tiene un turno asignado.");
                } else {
                    servicioSolicitado = "Asesoria";
                    tieneTurno = true;
                    console.log("Turno solicitado para Asesoría.");
                }
            }

            // OPCIÓN 3: Verificar Prioridad
            if (opcion == 3) {
                let edadTexto = prompt("Ingrese su edad:");
                if (edadTexto == null || edadTexto == "") {
                    console.log("No se ingresó la edad.");
                } else {
                    let edad = Number(edadTexto);
                    if (isNaN(edad) || edad < 0) {
                        console.log("Edad no válida.");
                    } else {
                        verificoPrioridad = true;
                        if (edad > 60) {
                            esTerceraEdad = true;
                            console.log("Prioridad Activada: Atención Preferencial");
                        }
                        if (edad <= 60) {
                            esTerceraEdad = false;
                            console.log("No aplica para atención preferencial");
                        }
                    }
                }
            }

            // OPCIÓN 4: Ver Turno Asignado
            if (opcion == 4) {
                if (tieneTurno == false && verificoPrioridad == false) {
                    console.log("Debe solicitar un servicio primero");
                }
                if (tieneTurno == true && verificoPrioridad == true) {
                    if (esTerceraEdad == true) {
                        console.log("Su turno es P-1 (Preferencial)");
                    }
                    if (esTerceraEdad == false && servicioSolicitado == "Caja") {
                        console.log("Su turno es C-1 (Caja)");
                    }
                    if (esTerceraEdad == false && servicioSolicitado == "Asesoria") {
                        console.log("Su turno es A-1 (Asesoría)");
                    }
                }
                if (tieneTurno == true && verificoPrioridad == false) {
                    if (servicioSolicitado == "Caja") {
                        console.log("Su turno es C-1 (Caja)");
                    }
                    if (servicioSolicitado == "Asesoria") {
                        console.log("Su turno es A-1 (Asesoría)");
                    }
                }
                if (tieneTurno == false && verificoPrioridad == true) {
                    console.log("Debe solicitar un servicio primero");
                }
            }

            // OPCIÓN 5: Salir
            if (opcion == 5) {
                salir = true;
                console.log("Gracias por usar Fila Express. ¡Hasta luego!");
            }
        }
    }
}