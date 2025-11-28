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

  opcionSeleccionada = Number(prompt(
    "Sistema de Votación DemoVoto\n" +
    "--------------------------------\n" +
    "1. Votar por Candidato A\n" +
    "2. Votar por Candidato B\n" +
    "3. Votar en Blanco\n" +
    "4. Consultar Resultados Parciales\n" +
    "5. Salir"
  ));

}
