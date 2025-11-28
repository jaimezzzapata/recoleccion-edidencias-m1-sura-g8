let pesoUsuario;
let alturaUsuario;
let indiceMasaCorporal;
let sistemaActivo = true;

console.log("=== Bienvenido a VidaSana - Asistente de Salud ===");
console.log("Sistema de cálculo de Índice de Masa Corporal (BMI)\n");

while (sistemaActivo) {
  let opcionSeleccionada = prompt(
    "MENÚ PRINCIPAL:\n" +
    "1 - Ingresar Peso\n" +
    "2 - Ingresar Altura\n" +
    "3 - Calcular BMI\n" +
    "4 - Interpretar Resultado (Clasificación OMS)\n" +
    "5 - Salir\n\n" +
    "Seleccione una opción:"
  );

  if (isNaN(opcionSeleccionada)) {
    console.log("❌ Error: Debe ingresar un número válido");
  } else {
    opcionSeleccionada = Number(opcionSeleccionada);

    switch (opcionSeleccionada) {
      default:
        console.log("❌ Opción inválida. Por favor seleccione una opción entre 1 y 5");
    }
  }
}