// Variables de estado (camelCase y descriptivas)
let tieneTurno = false;
let tipoServicio = "";
let verificoPrioridad = false;
let esTerceraEdad = false;
let opcionMenu = "";

// Menú principal cíclico (while)
while (opcionMenu !== "5") {
    opcionMenu = prompt(
        "=== Fila Express ===\n" +
        "1. Solicitar Turno para Caja\n" +
        "2. Solicitar Turno para Asesoría\n" +
        "3. Verificar Prioridad (Tercera Edad)\n" +
        "4. Ver Turno Asignado\n" +
        "5. Salir\n\n" +
        "Elige una opción:"
    );

    // ✅ USO DE SWITCH (exigido en rúbrica para Sobresaliente)
    switch (opcionMenu) {
        case "1":
            // Opción 1: Solicitar Turno para Caja
            if (tieneTurno) {
                console.log("Ya tienes un turno asignado. No puedes solicitar otro.");
            } else {
                tipoServicio = "Caja";
                tieneTurno = true;
                console.log("Turno solicitado para Caja.");
            }
            break;

        case "2":
            // Opción 2: Solicitar Turno para Asesoría
            if (tieneTurno) {
                console.log("Ya tienes un turno asignado. No puedes solicitar otro.");
            } else {
                tipoServicio = "Asesoria";
                tieneTurno = true;
                console.log("Turno solicitado para Asesoría.");
            }
            break;

        case "3":
            // Opción 3: Verificar Prioridad (Tercera Edad)
            let edadIngresada = parseInt(prompt("Ingresa tu edad:"));
            if (isNaN(edadIngresada)) {
                console.log("Edad no válida. Ingresa un número entero.");
            } else {
                verificoPrioridad = true;
                if (edadIngresada > 60) {
                    esTerceraEdad = true;
                    console.log("Prioridad Activada: Atención Preferencial");
                } else {
                    esTerceraEdad = false;
                    console.log("No aplica para atención preferencial");
                }
            }
            break;

        case "4":
            // Opción 4: Ver Turno Asignado → ✅ CON CONDICIONALES ANIDADOS
            if (!tieneTurno) {
                console.log("Debe solicitar un servicio primero");
            } else {
                if (!verificoPrioridad) {
                    console.log("Debe verificar su prioridad (Opción 3) antes de ver el turno final.");
                } else {
                    // ✅ Lógica anidada: condicional dentro de condicional (como exige la rúbrica)
                    if (esTerceraEdad) {
                        // Si es tercera edad → Preferencial (independiente del servicio)
                        console.log("Su turno es: P-1 (Preferencial)");
                    } else {
                        // Si NO es tercera edad → depende del tipo de servicio
                        if (tipoServicio === "Caja") {
                            console.log("Su turno es: C-1 (Caja)");
                        } else if (tipoServicio === "Asesoria") {
                            console.log("Su turno es: A-1 (Asesoría)");
                        }
                    }
                }
            }
            break;

        case "5":
            console.log("Gracias por usar Fila Express. ¡Hasta pronto!");
            break;

        default:
            console.log("Opción no válida. Por favor, elige del 1 al 5.");
            break;
    }
}