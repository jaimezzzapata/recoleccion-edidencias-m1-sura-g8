// RECOLECCION DE EVIDENCIAS PRIMER MOMENTO SURA G8
// EJERCICIO No. 1 " PROTOTIPO DE CAJERO AUTOMÁTICO "BANCA AMIGA" 

//INICIO
let saldoActual = 500000;

let opcion = 0;

// Ciclo principal del menú (se repite hasta que el usuario elija salir)
while (opcion !== 5) {

    console.log("\n=== Cajero Automático - Banca Amiga ===");
    console.log("1. Consignar Dinero");
    console.log("2. Retirar Dinero");
    console.log("3. Consultar Saldo");
    console.log("4. Validación de Seguridad (PIN)");
    console.log("5. Salir");

    opcion = Number(prompt("Seleccione una opción del menú: "));

    switch (opcion) {

        // Opción #1 CONSIGNAR DINERO
        
        case 1:
            let montoConsignar = parseInt(prompt("¿Cuánto dinero desea consignar?: "));

            if (montoConsignar > 0) {
                saldoActual = saldoActual + montoConsignar;
                console.log("Consignación exitosa.");
                console.log("Nuevo saldo: " + saldoActual);
            } else {
                
                console.log("Monto no válido. Debe ser mayor a cero.");
            }
        break;

        // Opción #2 RETIRAR DINERO
        
        case 2:
            let montoRetirar = parseInt(prompt("¿Cuánto dinero desea retirar?: "));

            if (montoRetirar <= 0) {
                console.log("Monto no válido. Debe ser mayor a cero.");
            } else if (montoRetirar > saldoActual) {
                console.log("Fondos insuficientes.");
            } else {
                saldoActual = saldoActual - montoRetirar;
                console.log("Retiro exitoso.");
                console.log("Nuevo saldo: " + saldoActual);
            }
        break;

        // Opción #3 CONSULTAR SALDO
    
        case 3:
            console.log("Su saldo actual es: " + saldoActual);
        break;

        // Opción #4 VALIDACIÓN DE SEGURIDAD (PIN)
        
        case 4:
            let pinIngresado = parseInt(prompt("Ingrese el PIN de seguridad: "));

            if (pinIngresado === 1234) {
                console.log("Acceso de seguridad aprobado.");
            } else if (pinIngresado === 9999) {
                console.log("PIN bloqueado por exceso de . Contacte a la entidad.");
            } else {
                console.log("PIN incorrecto.");
            }
        break;

        // Opción #5 SALIR
        
        case 5:
            console.log("Gracias por usar Banca Amiga. ¡Hasta pronto🤷!");
        break;

        // Opción no válida
        
        default:
            console.log("Opción no válida. Intente nuevamente.");
        break;
    }
}
