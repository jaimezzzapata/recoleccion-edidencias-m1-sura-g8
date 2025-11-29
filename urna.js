// Inicialización de votos
let votosCandidatoA = 0;
let votosCandidatoB = 0;
let votosEnBlanco = 0;
let opcionSeleccionada = "";

console.log("=== URNA DIGITAL ===");

// Ciclo principal
while (opcionSeleccionada !== "5") {

    // Mostrar menú
    console.log("\nMenú:");
    console.log("1. Votar por Candidato A");
    console.log("2. Votar por Candidato B");
    console.log("3. Votar en Blanco");
    console.log("4. Consultar Resultados Parciales");
    console.log("5. Salir");

    // Leer opción del usuario
    opcionSeleccionada = prompt("Ingrese la opción deseada:");

    // Opción 1: Votar por Candidato A
    if (opcionSeleccionada === "1") {
        let codigoEstudiante = prompt("Ingrese su código de estudiante:");
        if (codigoEstudiante === "123") {
            console.log("Este estudiante ya ejerció su voto.");
        }else {
            votosCandidatoA++;
            console.log("Voto registrado.");
        }

    // Opción 2: Votar por Candidato B
    } else if (opcionSeleccionada === "2") {
        let codigoEstudiante = prompt("Ingrese su código de estudiante:");
        if (codigoEstudiante === "123") {
            console.log("Este estudiante ya ejerció su voto.");
        } else {
            votosCandidatoB++;
            console.log("Voto registrado.");
        }

    // Opción 3: Votar en Blanco
    } else if (opcionSeleccionada === "3") {
        let codigoEstudiante = prompt("Ingrese su código de estudiante:");
        if (codigoEstudiante === "123") {
            console.log("Este estudiante ya ejerció su voto.");
        }else {
            votosEnBlanco++;
            console.log("Voto registrado.");
        }

    // Opción 4: Mostrar resultados parciales
    } else if (opcionSeleccionada === "4") {
        console.log("\n=== RESULTADOS PARCIALES ===");
        console.log("Candidato A: " + votosCandidatoA + " votos");
        console.log("Candidato B: " + votosCandidatoB + " votos");
        console.log("Votos en Blanco: " + votosEnBlanco + " votos");

        if (votosCandidatoA === 0 && votosCandidatoB === 0 && votosEnBlanco === 0) {
            console.log("Aún no hay votos.");
        } else if (votosCandidatoA > votosCandidatoB) {
            console.log("El Candidato A va ganando.");
        } else if (votosCandidatoB > votosCandidatoA) {
            console.log("El Candidato B va ganando.");
        } else if (votosCandidatoA === votosCandidatoB && votosCandidatoA > 0) {
            console.log("Hay un empate entre los candidatos A y B.");
        }

    // Opción 5: Salir
    } else if (opcionSeleccionada === "5") {
        console.log("Saliendo del sistema...");

    } else {
        console.log("Opción inválida. Intente de nuevo.");
    }
}