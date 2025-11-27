// EJERCICIO 1: PROTOTIPO DE CAJERO AUTOMÁTICO
// Las variables usan camelCase y son descriptivas.
// Las constantes usan mayúsculas.
// Se usa let/const (var está obsoleto).
// No se usan arreglos, funciones, objetos ni DOM.

// Inicialización
let saldoActual = 100000;
let opcion = 0;
const PIN_SECRETO = "1234";
const PIN_BLOQUEADO = "9999";

// Bucle principal (do-while para ejecución continua)
do {
    // Menú principal (100% por consola)
    console.log("-----------------------------------------");
    console.log("        CAJERO AUTOMÁTICO BANCA AMIGA    ");
    console.log("-----------------------------------------");
    console.log("Saldo Actual: $" + saldoActual); // Muestra el saldo para referencia
    console.log("1. Consignar Dinero");
    console.log("2. Retirar Dinero");
    console.log("3. Consultar Saldo");
    console.log("4. Opción de Seguridad (Validación de PIN)");
    console.log("5. Salir");
    console.log("-----------------------------------------");

    // Captura de opción (Recuerda que prompt devuelve string, usamos parseInt)
    let opcionTexto = prompt("Ingrese el número de la opción deseada (1 a 5): ");
    opcion = parseInt(opcionTexto);

    // Lógica de decisiones con SWITCH
    switch (opcion) {
        case 1:
            // Opción 1: Consignar Dinero
            let montoConsignar = parseInt(prompt("Ingrese cuánto dinero desea consignar: "));

            if (montoConsignar > 0) {
                saldoActual = saldoActual + montoConsignar;
                console.log("Consignación exitosa. Su nuevo saldo es: $" + saldoActual);
            } else {
                console.log("El monto ingresado es inválido. Debe ser un valor positivo.");
            }
            break;

        case 2:
            // Opción 2: Retirar Dinero
            let montoRetirar = parseInt(prompt("Ingrese cuánto dinero desea retirar: "));

            if (montoRetirar <= 0) {
                console.log("Monto no válido.");
            } else if (montoRetirar > saldoActual) {
                console.log("Fondos insuficientes.");
            } else {
                saldoActual = saldoActual - montoRetirar;
                console.log("Retiro exitoso. Su nuevo saldo es: $" + saldoActual);
            }
            break;

        case 3:
            // Opción 3: Consultar Saldo
            console.log("Su saldo disponible en este momento es: $" + saldoActual);
            break;

        case 4:
            // Opción 4: Validación de Seguridad (PIN)
            let pinIngresado = prompt("Ingrese el PIN de seguridad (un número): ");

            if (pinIngresado === PIN_SECRETO) {
                console.log("Acceso de seguridad Aprobado.");
            } else if (pinIngresado === PIN_BLOQUEADO) {
                console.log("PIN Bloqueado. Contacte a la entidad.");
            } else {
                console.log("PIN incorrecto.");
            }
            break;

        case 5:
            // Opción 5: Salir
            console.log("Saliendo del sistema...");
            break;

        default:
            console.log("Opción no válida. Intente de nuevo.");
            break;
    }

} while (opcion !== 5);

// Mensaje final
console.log("Gracias por usar el Cajero Automático Banca Amiga. ¡Hasta pronto!");