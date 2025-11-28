// **********************************************
// Variables Globales
// Usaremos un valor especial (como -1) para saber si la nota aún no se ha ingresado.
// ¡Recuerda, no podemos usar arrays!
// **********************************************

var notaProyectos = -1; // Peso: 40%
var notaParcial = -1;   // Peso: 30%
var notaFinal = -1;     // Peso: 30%

var definitiva = 0;
var opcionMenu = 0;
var continuar = true;

// -------------------------
// Consola en página (pantalla completa) para una estética más agradable
// -------------------------
(function(){
    function getConsoleEl() {
        return document.getElementById('webConsole');
    }

    var origLog = console.log.bind(console);
    var origWarn = console.warn.bind(console);
    var origError = console.error.bind(console);

    function appendToWebConsole(msg, cls) {
        var el = getConsoleEl();
        if (!el) return;
        var line = document.createElement('div');
        line.className = cls || 'log';
        // Convertir objetos a string legible
        try {
            if (typeof msg === 'object') {
                line.textContent = JSON.stringify(msg, null, 2);
            } else {
                line.textContent = String(msg);
            }
        } catch (e) {
            line.textContent = String(msg);
        }
        el.appendChild(line);
        // Mantener el scroll al final (aunque la barra está oculta)
        el.scrollTop = el.scrollHeight;
    }

    console.log = function() {
        origLog.apply(console, arguments);
        try { appendToWebConsole(Array.from(arguments).join(' '), 'log'); } catch(e){}
    };
    console.warn = function() {
        origWarn.apply(console, arguments);
        try { appendToWebConsole(Array.from(arguments).join(' '), 'warn'); } catch(e){}
    };
    console.error = function() {
        origError.apply(console, arguments);
        try { appendToWebConsole(Array.from(arguments).join(' '), 'error'); } catch(e){}
    };

    // Botón limpiar consola
    window.addEventListener('load', function(){
        var btn = document.getElementById('clearConsoleBtn');
        if (btn) btn.addEventListener('click', function(){
            var el = document.getElementById('webConsole');
            if (el) el.innerHTML = '';
        });
    });
})();

// **********************************************
// Función principal (¡No es una función declarada, es el cuerpo del script!)
// **********************************************

// Uso un ciclo while para mantener el menú corriendo hasta que el usuario le de salir.
while (continuar) {

    // Mostrar el menú
    var entrada = prompt(
        "--- Calculadora de Notas ---\n" +
        "Notas actuales (0-5):\n" +
        "Proyectos (40%): " + (notaProyectos !== -1 ? notaProyectos : "PENDIENTE") + "\n" +
        "Parcial (30%): " + (notaParcial !== -1 ? notaParcial : "PENDIENTE") + "\n" +
        "Final (30%): " + (notaFinal !== -1 ? notaFinal : "PENDIENTE") + "\n\n" +
        "Seleccione una opción:\n" +
        "1. Ingresar Nota de Proyectos\n" +
        "2. Ingresar Nota de Examen Parcial\n" +
        "3. Ingresar Nota de Examen Final\n" +
        "4. Calcular Definitiva y Estado\n" +
        "5. Salir"
    );

    // Convierto la entrada a número. Si es nulo (cancelar) o texto, será 0.
    opcionMenu = parseInt(entrada);

    // Uso el switch para gestionar las opciones del menú.
    switch (opcionMenu) {
        case 1:
            // ------------------------------------
            // Ingresar Nota de Proyectos (40%)
            // ------------------------------------
            var entradaProyecto = prompt("Ingrese la nota de Proyectos (0 a 5):");
            var nuevaNotaProyecto = parseFloat(entradaProyecto);

            // Validar que la nota esté en el rango (0 a 5)
            if (nuevaNotaProyecto >= 0 && nuevaNotaProyecto <= 5) {
                notaProyectos = nuevaNotaProyecto;
                console.log("✅ Nota de Proyectos registrada: " + notaProyectos);
            } else {
                console.error("❌ Nota inválida, debe ser entre 0 y 5.");
            }
            break;

        case 2:
            // ------------------------------------
            // Ingresar Nota de Examen Parcial (30%)
            // ------------------------------------
            var entradaParcial = prompt("Ingrese la nota del Examen Parcial (0 a 5):");
            var nuevaNotaParcial = parseFloat(entradaParcial);

            // Validar que la nota esté en el rango (0 a 5)
            if (nuevaNotaParcial >= 0 && nuevaNotaParcial <= 5) {
                notaParcial = nuevaNotaParcial;
                console.log("✅ Nota de Examen Parcial registrada: " + notaParcial);
            } else {
                console.error("❌ Nota inválida, debe ser entre 0 y 5.");
            }
            break;

        case 3:
            // ------------------------------------
            // Ingresar Nota de Examen Final (30%)
            // ------------------------------------
            var entradaFinal = prompt("Ingrese la nota del Examen Final (0 a 5):");
            var nuevaNotaFinal = parseFloat(entradaFinal);

            // Validar que la nota esté en el rango (0 a 5)
            if (nuevaNotaFinal >= 0 && nuevaNotaFinal <= 5) {
                notaFinal = nuevaNotaFinal;
                console.log(" Nota de Examen Final registrada: " + notaFinal);
            } else {
                console.error("❌ Nota inválida, debe ser entre 0 y 5.");
            }
            break;

        case 4:
            // ------------------------------------
            // Calcular Definitiva y Estado
            // ------------------------------------

            // Primero, verificar si todas las notas están ingresadas (es decir, no son -1).
            if (notaProyectos === -1 || notaParcial === -1 || notaFinal === -1) {

                var faltantesArr = [];
                if (notaProyectos === -1) faltantesArr.push('Proyectos');
                if (notaParcial === -1) faltantesArr.push('Examen Parcial');
                if (notaFinal === -1) faltantesArr.push('Examen Final');

                var msgFaltantes = '⚠️ ERROR: Aún no ha ingresado todas las notas. Falta: ' + faltantesArr.join(', ');
                console.warn(msgFaltantes);
                try { alert(msgFaltantes); } catch(e) {}

            } else {
                // Todas las notas están, procedemos al cálculo
                definitiva = (notaProyectos * 0.4) + (notaParcial * 0.3) + (notaFinal * 0.3);

                // Asegurar que la definitiva no tenga demasiados decimales
                definitiva = Math.round(definitiva * 100) / 100;

                // Construir mensaje de resultado para mostrar inmediatamente
                var resultadoLines = [];
                resultadoLines.push('--- RESULTADO FINAL ---');
                resultadoLines.push('Definitiva Calculada: ' + definitiva);

                var estado = '';
                if (definitiva >= 4.6) {
                    estado = '🏆 Estado: Excelente. ¡Felicidades!';
                } else if (definitiva >= 3.0) {
                    estado = '✅ Estado: Aprueba.';
                } else if (definitiva >= 2.0) {
                    estado = '🔶 Estado: Recupera. Tienes una oportunidad.';
                } else {
                    estado = '❌ Estado: Reprueba.';
                }

                resultadoLines.push(estado);
                resultadoLines.push('-----------------------');

                var resultadoTexto = resultadoLines.join('\n');
                console.log(resultadoTexto);
                try { alert(resultadoTexto); } catch(e) {}
            }
            break;

        case 5:
            // ------------------------------------
            // Salir
            // ------------------------------------
            console.log(" Saliendo de la Calculadora. ¡Adiós!");
            continuar = false; // Detiene el ciclo while
            break;
            
        default:
            // Opción no reconocida o entrada no válida
            if (entrada === null || entrada.trim() === "") {
                // El usuario presionó Cancelar o dejó vacío, lo tomo como salir por cortesía.
                console.log(" Saliendo de la Calculadora. ¡Adiós!");
                continuar = false;
            } else {
                console.warn(" Opción inválida. Por favor, ingrese un número del 1 al 5.");
            }
            break;
    }

    // Pequeño separador visual en la consola
    if (continuar) {
        console.log("\n" + "-".repeat(40) + "\n");
    }
}   