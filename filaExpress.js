let turno = null;
let edad = null;
let prioridad = false;
let salir = false;

while (!salir) {
  let opcion = prompt(
    "Sistema de Turnos - Fila Express\n" +
    "1. Solicitar Turno para Caja\n" +
    "2. Solicitar Turno para Asesoría\n" +
    "3. Verificar Prioridad (Tercera Edad)\n" +
    "4. Ver Turno Asignado\n" +
    "5. Salir\n\n" +
    "Seleccione una opción:"
  );

  switch (opcion) {
    case "1":
      if (turno === null) {
        turno = "C-1";
        alert("Turno asignado: " + turno);
      } else {
        alert("Ya tiene un turno asignado: " + turno);
      }
      break;

    case "2":
      if (turno === null) {
        turno = "A-1";
        alert("Turno asignado: " + turno);
      } else {
        alert("Ya tiene un turno asignado: " + turno);
      }
      break;

    case "3":
      edad = parseInt(prompt("Ingrese su edad:"));
      if (edad >= 60) {
        prioridad = true;
        alert("Prioridad Activada: Atención Preferencial");
      } else {
        prioridad = false;
        alert("No aplica para atención preferencial");
      }
      break;

    case "4":
      if (turno === null) {
        alert("Debe solicitar un servicio primero");
      } else {
        if (prioridad) {
          alert("Su turno es: P-1 (Preferencial)");
        } else {
          if (turno === "C-1") {
            alert("Su turno es: C-1 (Caja)");
          } else if (turno === "A-1") {
            alert("Su turno es: A-1 (Asesoría)");
          }
        }
      }
      break;

    case "5":
      salir = true;
      alert("Gracias por usar Fila Express");
      break;

    default:
      alert("Opción inválida, intente de nuevo.");
  }
}
