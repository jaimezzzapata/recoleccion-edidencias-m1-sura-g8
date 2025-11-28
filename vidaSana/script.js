let peso = 0;
let altura = 0;
let bmi = 0;
let opcion;

console.log("👋 Bienvenido al asistente virtual de VidaSana.");
alert("👋 Bienvenido al asistente virtual de VidaSana.");

do {
  opcion = prompt(
    "MENÚ PRINCIPAL\n" +
      "1. Ingresar Peso \n" +
      "2. Ingresar Altura \n" +
      "3. Calcular BMI \n" +
      "4. Interpretar Resultado \n" +
      "5. Salir \n\n" +
      "Selecciona la opccion que deseas realizar: "
  );
  console.log("La opción que seleccionaste es: " + opcion);

  if (opcion === "1") {
    let p = Number(prompt("Ingresa tu peso en kilogramos:"));

    if (p > 0 && p < 400) {
      peso = p;
      alert("Peso registrado correctamente. ✅");
      console.log("Peso: " + peso);
    } else {
      alert("Dato invalido, porfavor intenta nuevamente. ❌");
      console.log("El peso " + p + " es invalido")
    }
  } else if (opcion === "2") {
    let a = Number(prompt("Ingresa tu altura en metros:"));

    if (a > 0 && a < 3) {
      altura = a;
      alert("Altura registrada correctamente. ✅");
      console.log("Altura: "+altura)
    } else {
      alert("Dato invalido, porfavor intenta nuevamente. ❌");
      console.log("La altura "+ a +" es invalida")
    }
  } else if (opcion === "3") {
    if (peso > 0 && altura > 0) {
      bmi = (peso / (altura * altura)).toFixed(1);
      alert("Tu BMI es: " + bmi);
      console.log("Tu BMI es: " + bmi)
    } else {
      alert(
        "Faltan datos en el sistema, porfavor verifica que el peso y la altura estén correctamente registrados"
      );
      console.log("Faltan datos en el sistema, porfavor verifica que el peso y la altura estén correctamente registrados")
    }
  } else if (opcion === "4") {
    if (bmi === 0) {
      alert("Calcula primero el BMI");
      console.log("Calcula primero el BMI")
    } else {
      if (bmi < 18.5) {
        alert(bmi + " Clasificación: Bajo Peso");
        console.log(bmi + " Clasificación: Bajo Peso");
      } else if (bmi < 25) {
        alert(bmi + " Clasificación: Peso Normal");
        console.log(bmi + " Clasificación: Peso Normal")
      } else if (bmi < 30) {
        alert(bmi + " Clasificación: Sobrepeso");
        console.log(bmi + " Clasificación: Sobrepeso")
      } else {
        alert(bmi + " Clasificación: Obesidad");
        console.log(bmi + " Clasificación: Obesidad")
      }
    }
  } else if (opcion !== "5") {
    alert("Opción inválida.")
    console.log("Opción inválida.")
  }
} while (opcion !== "5");

alert("Gracias por preferirnos.\n      VidaSana  2025");
console.log("Gracias por preferirnos.\n      VidaSana  2025")
