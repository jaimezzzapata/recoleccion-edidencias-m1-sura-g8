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
  }
}