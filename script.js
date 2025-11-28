// 1. DECLARACIÓN DE VARIABLES

// Contadores de votos para cada opción
let contadorVotosA = 0;
let contadorVotosB = 0;
let contadorVotosBlanco = 0;

// Variables de control del menú y validación
let opcionSeleccionada = 0;
let codigoIngresado = 0;

//2. CICLO PRINCIPAL DEL SISTEMA
// El sistema se ejecuta mientras el usuario no elija salir (opción 5)

while (opcionSeleccionada !== 5) {
  opcionSeleccionada = Number(
    prompt(
      "Sistema de Votación DemoVoto\n" +
        "--------------------------------\n" +
        "1. Votar por Candidato A\n" +
        "2. Votar por Candidato B\n" +
        "3. Votar en Blanco\n" +
        "4. Consultar Resultados Parciales\n" +
        "5. Salir"
    )
  );

   // 3. VALIDAR OPCIÓN
  if (isNaN(opcionSeleccionada) || opcionSeleccionada < 1 || opcionSeleccionada > 5) {
    console.log("Opción incorrecta. Debe ingresar un número entre 1 y 5.");
    continue;
  }
  // 4. OPCIÓN 1
  if (opcionSeleccionada === 1) {

    codigoIngresado = Number(prompt("Ingrese su código de estudiante:"));

    if (codigoIngresado === 123) {
      console.log("Este estudiante ya ejerció su voto.");
    } else {
      contadorVotosA = contadorVotosA + 1;
      console.log("Voto registrado correctamente para el Candidato A.");
    }
  }

  // 5. OPCIÓN 2
  else if (opcionSeleccionada === 2) {

    codigoIngresado = Number(prompt("Ingrese su código de estudiante:"));

    if (codigoIngresado === 123) {
      console.log("Este estudiante ya ejerció su voto.");
    } else {
      contadorVotosB = contadorVotosB + 1;
      console.log("Voto registrado correctamente para el Candidato B.");
    }
  }

  // 6. OPCIÓN 3
  else if (opcionSeleccionada === 3) {

    codigoIngresado = Number(prompt("Ingrese su código de estudiante:"));

    if (codigoIngresado === 123) {
      console.log("Este estudiante ya ejerció su voto.");
    } else {
      contadorVotosBlanco = contadorVotosBlanco + 1;
      console.log("Voto en blanco registrado correctamente.");
    }
  }
  // 7. OPCIÓN 4
  else if (opcionSeleccionada === 4){
    
     console.log(
      "Resultados Parciales de la Votación:" +
      "\nCandidato A: " + contadorVotosA +
      "\nCandidato B: " + contadorVotosB +
      "\nVotos en Blanco: " + contadorVotosBlanco
     );
      // Determinar quién va ganando
    if (contadorVotosA === 0 && contadorVotosB === 0 && contadorVotosBlanco === 0) {
      console.log("Aún no se han registrado votos.");
    }
    else if (contadorVotosA > contadorVotosB) {
      console.log("El Candidato A va ganando.");
    }
    else if (contadorVotosB > contadorVotosA) {
      console.log("El Candidato B va ganando.");
    }
    else {
      console.log("Hay un empate entre el Candidato A y el Candidato B.");
    }
  
  }
}
