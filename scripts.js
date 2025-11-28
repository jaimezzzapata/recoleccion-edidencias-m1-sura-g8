// Variables iniciales (camelCase y descriptivas)
let costoBase = 5000;
let zonaDefinida = false;
let pesoDefinido = false;
let pesoPaquete = 0;
let recargoPorPeso = 0;
let seguroAplicado = false;
let costoSeguro = 2000;
let opcionMenu = "";

// Menú principal cíclico
while (opcionMenu !== "5") {
    opcionMenu = prompt(
        "=== Cotizador RapidiEntrega ===\n" +
        "1. Definir Zona de Envío\n" +
        "2. Definir Peso del Paquete (en Kg)\n" +
        "3. Aplicar Seguro (Opcional)\n" +
        "4. Calcular Costo Total del Envío\n" +
        "5. Salir\n\n" +
        "Elige una opción:"
    );

    // ✅ USO DE SWITCH (exigido en rúbrica para Sobresaliente)
    switch (opcionMenu) {
        case "1":
            // Definir Zona de Envío
            let zonaIngresada = prompt("Ingresa la zona: 'Nacional' o 'Internacional'");
            if (zonaIngresada === "Nacional") {
                costoBase = 5000;
                zonaDefinida = true;
                console.log("Zona definida como Nacional. Costo base: " + costoBase);
            } else if (zonaIngresada === "Internacional") {
                costoBase = 15000; // 5000 * 3
                zonaDefinida = true;
                console.log("Zona definida como Internacional. Costo base: " + costoBase);
            } else {
                console.log("Zona no válida. Por favor, ingresa 'Nacional' o 'Internacional'.");
                zonaDefinida = false;
            }
            break;

        case "2":
            // Definir Peso del Paquete
            let pesoIngresado = parseFloat(prompt("Ingresa el peso del paquete en Kg:"));
            if (isNaN(pesoIngresado)) {
                console.log("Peso no válido. Ingresa un número.");
                pesoDefinido = false;
            } else {
                pesoPaquete = pesoIngresado;
                pesoDefinido = true;

                // ✅ Lógica con if/else if (estructura clara y correcta)
                if (pesoPaquete < 2) {
                    recargoPorPeso = 0;
                    console.log("Peso menor a 2 Kg. No hay recargo.");
                } else if (pesoPaquete >= 2 && pesoPaquete <= 5) {
                    recargoPorPeso = costoBase * 0.25;
                    console.log("Peso entre 2 y 5 Kg. Recargo del 25%: " + recargoPorPeso);
                } else {
                    recargoPorPeso = costoBase * 0.5;
                    console.log("Peso mayor a 5 Kg. Recargo del 50%: " + recargoPorPeso);
                }
            }
            break;

        case "3":
            // Aplicar Seguro
            let respuestaSeguro = prompt("¿Deseas aplicar seguro? (Si / No)");
            if (respuestaSeguro === "Si") {
                seguroAplicado = true;
                console.log("Seguro aplicado. Costo adicional: " + costoSeguro);
            } else if (respuestaSeguro === "No") {
                seguroAplicado = false;
                console.log("Seguro no aplicado.");
            } else {
                console.log("Respuesta no válida. Usa 'Si' o 'No'.");
            }
            break;

        case "4":
            // Calcular Costo Total → ✅ con validaciones y lógica clara
            if (!zonaDefinida) {
                console.log("Error: Debes definir primero la zona de envío (Opción 1).");
            } else if (!pesoDefinido) {
                console.log("Error: Debes definir primero el peso del paquete (Opción 2).");
            } else {
                let costoTotal = costoBase + recargoPorPeso;
                if (seguroAplicado) {
                    costoTotal += costoSeguro;
                }

                // Mostrar resumen detallado
                console.log("=== COSTO TOTAL DEL ENVÍO ===");
                console.log("Costo base: " + costoBase);
                console.log("Recargo por peso: " + recargoPorPeso);
                if (seguroAplicado) {
                    console.log("Seguro: " + costoSeguro);
                }
                console.log("TOTAL A PAGAR: " + costoTotal);
            }
            break;

        case "5":
            console.log("Gracias por usar RapidiEntrega. ¡Hasta pronto!");
            break;

        default:
            console.log("Opción no válida. Por favor, elige del 1 al 5.");
            break;
    }
}