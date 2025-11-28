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

      case 4:
        if (indiceMasaCorporal === undefined) {
          console.log("❌ Error: Debe calcular primero el BMI (Opción 3)");
        } else {
          console.log("\n--- RESULTADO DEL ANÁLISIS ---");
          console.log("Su BMI es: " + indiceMasaCorporal.toFixed(2));
          
          if (indiceMasaCorporal < 18.5) {
            console.log("Clasificación: Bajo Peso");
            console.log("⚠️ Se recomienda consultar con un profesional de la salud");
          } else if (indiceMasaCorporal >= 18.5 && indiceMasaCorporal <= 24.9) {
            console.log("Clasificación: Peso Normal");
            console.log("✅ Su peso está dentro del rango saludable");
          } else if (indiceMasaCorporal >= 25 && indiceMasaCorporal <= 29.9) {
            console.log("Clasificación: Sobrepeso");
            console.log("⚠️ Se recomienda una alimentación balanceada y actividad física");
          } else if (indiceMasaCorporal >= 30) {
            console.log("Clasificación: Obesidad");
            console.log("⚠️ Es importante consultar con un profesional de la salud");
          }
          console.log("-------------------------------\n");
        }
        break;

      case 5:
        console.log("\n=== Gracias por usar VidaSana ===");
        console.log("¡Cuide su salud!");
        sistemaActivo = false;
        break;

      default:
        console.log("❌ Opción inválida. Por favor seleccione una opción entre 1 y 5");
    }
  }
}