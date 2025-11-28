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
      case 1:
        let pesoIngresado = prompt("Ingrese su peso en kilogramos (Kg):");
        
        if (isNaN(pesoIngresado)) {
          console.log("❌ Error: El peso debe ser un valor numérico");
        } else {
          pesoIngresado = Number(pesoIngresado);
          
          if (pesoIngresado <= 0 || pesoIngresado >= 500) {
            console.log("❌ Dato inválido: El peso debe ser mayor a 0 y menor a 500 Kg");
          } else {
            pesoUsuario = pesoIngresado;
            console.log("✅ Peso registrado correctamente: " + pesoUsuario + " Kg");
          }
        }
        break;

      case 2:
        let alturaIngresada = prompt("Ingrese su altura en metros (m):");
        
        if (isNaN(alturaIngresada)) {
          console.log("❌ Error: La altura debe ser un valor numérico");
        } else {
          alturaIngresada = Number(alturaIngresada);
          
          if (alturaIngresada <= 0 || alturaIngresada >= 3) {
            console.log("❌ Dato inválido: La altura debe ser mayor a 0 y menor a 3 metros");
          } else {
            alturaUsuario = alturaIngresada;
            console.log("✅ Altura registrada correctamente: " + alturaUsuario + " m");
          }
        }
        break;

      case 3:
        if (pesoUsuario === undefined || alturaUsuario === undefined) {
          console.log("❌ Error: Debe ingresar primero el peso (Opción 1) y la altura (Opción 2)");
        } else {
          indiceMasaCorporal = pesoUsuario / (alturaUsuario * alturaUsuario);
          console.log("✅ BMI calculado exitosamente: " + indiceMasaCorporal.toFixed(2));
        }
        break;

      default:
        console.log("❌ Opción inválida. Por favor seleccione una opción entre 1 y 5");
    }
  }
}