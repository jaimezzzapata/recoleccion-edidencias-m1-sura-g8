let notaProyectos;
let notaExamenParcial;
let notaExamenFinal;
let proyectosIngresado = false;
let parcialIngresado = false;
let finalIngresado = false;
let continuar = true;

while (continuar) {
    let opcion = prompt(
        "                        Calculadora de Notas - Academia Full-Stack          \n"+
    "                                             =Menú Principal=\n" + 
    "                                1. Ingresar Nota de Proyectos\n"+
    "                                2. Ingresar Nota de Examen Parcial\n"+
    "                                3. Ingresar Nota de Examen Final\n"+
    "                                4. Calcular Definitiva y Estado\n"+
    "                                5. Salir\n"+
    "                                \nSeleccione una opción:"
  );
  if (opcion == "1"){
    let nota = prompt("Ingrese la nota de Proyectos (0 - 5):");
    if (isNaN(nota)) {
        console.log("Debe ingresar un valor númerico.");
    } else if (nota < 0 || nota > 5) {
        console.log("La nota debe estar entre 0 y 5.");
    } else {
        notaProyectos = nota;
        proyectosIngresado = true;
    }
  } else if (opcion == "2"){
    let nota = prompt("Ingrese la nota de Examen Parcial (0 - 5):");
    if (isNaN(nota)) {
        console.log("Debe ingresar un valor númerico.");
    } else if (nota < 0 || nota > 5) {
        console.log("La nota debe estar entre 0 y 5.");
    } else {
        notaExamenParcial = nota;
        parcialIngresado = true;
    }
  } else if (opcion == "3"){
    let nota = prompt("Ingrese la nota de Examen Final (0 - 5):");
    if (isNaN(nota)) {
        console.log("Debe ingresar un valor númerico.");
    } else if (nota < 0 || nota > 5) {
        console.log("La nota debe estar entre 0 y 5.");
    } else {
        notaExamenFinal = nota;
        finalIngresado = true;
    }
  } else if (opcion == "4"){
    if (proyectosIngresado == false) {
        console.log("Debe ingresar la nota de Proyectos para realizar el cálculo");
    } else if (parcialIngresado == false) {
        console.log("Debe ingresar la nota de Examen Parcial para realizar el cálculo");
    } else if (finalIngresado == false) {
        console.log("Debe ingresar la nota de Examen Final para realizar el cálculo");
    } else {
        let notaDefinitiva = notaProyectos * 0.4 + notaExamenParcial * 0.3 + notaExamenFinal * 0.3;
        console.log("Nota de Proyectos (40%): " + notaProyectos);
        console.log("Nota de Examen Parcial (30%): " + notaExamenParcial);
        console.log("Nota de Examen Final (30%): " + notaExamenFinal);
        console.log("Nota Definitiva: " + notaDefinitiva);
        if (notaDefinitiva >= 4.6) {
            console.log("Estado: Excelente");
        } else if (notaDefinitiva >= 3.0 && notaDefinitiva <= 4.5) {
            console.log("Estado: Aprueba");
        } else if (notaDefinitiva >= 2.0 && notaDefinitiva <= 2.9) {
            console.log("Estado: Recupera");
        } else {
            console.log("Estado: Reprueba");
        }
    }
  } else if (opcion == "5") {
    console.log("Gracias por usar nuestra Calculadora de Notas");
    console.log("¡Hasta pronto!");
    continuar = false;
  }
}