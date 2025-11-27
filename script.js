/*Ejercicio 10: Control de Acceso 'EventoTech'
La Necesidad:
'EventoTech' organiza una conferencia tecnológica. Tienen dos tipos de entradas: 'General' y
'VIP'. El acceso al evento principal requiere ser mayor de edad, pero el acceso a la "Zona VIP"
(donde sirven licores) requiere ser mayor de edad Y tener entrada VIP. Necesitan un prototipo
para el personal de logística en la entrada.
Tu Tarea:
Simular el punto de control de acceso. El personal debe poder ingresar la edad y el tipo de
entrada del asistente, y el sistema debe decidir a qué zonas puede ingresar.
Requisitos de Operación:
● El sistema debe registrar la edad y el tipo de entrada del asistente.
● El menú principal debe ofrecer:
1. Registrar Edad del Asistente
2. Registrar Tipo de Entrada ("General" o "VIP")
3. Verificar Acceso (Evento Principal)
4. Verificar Acceso (Zona VIP)
5. Salir
Lógica de Decisiones (Condicionales):
● Opción 1 (Registrar Edad):
○ Pide la edad. Debe validar que sea un número positivo.
● Opción 2 (Registrar Entrada):
○ Pide el tipo ("General" o "VIP"). Debe validar que sea una de esas dos opciones.
● Opción 3 (Acceso Evento Principal):
○ Debe validar que la Edad (Opción 1) haya sido ingresada.
○ Si la edad es 18 o más: "Acceso PERMITIDO al Evento Principal".

○ Si la edad es menor a 18: "Acceso DENEGADO (Menor de edad)".
● Opción 4 (Acceso Zona VIP):
○ Debe validar que tanto la Edad (Opción 1) como la Entrada (Opción 2) hayan sido
ingresadas.
○ Debe usar decisiones anidadas o compuestas:
■ Si edad es 18 o más Y el tipo es "VIP": "Acceso PERMITIDO a Zona VIP".
■ Si edad es 18 o más Y el tipo es "General": "Acceso DENEGADO (Requiere
entrada VIP)".
■ Si edad es menor a 18 (sin importar la entrada): "Acceso DENEGADO (Menor de
edad)".
● Opción 5 (Salir):
○ Debe terminar el programa.*/

let edad = "";
let tipoDeEntrada = "";
let opcion = "";
console.log("==========================================");
console.log("Bienvenido a eventoTech-Registro de Acceso");
console.log("==========================================");

while (opcion !== "5") {
  opcion = prompt(
    "Menú de Opciones:\n1. Registrar Edad del Asistente\n2. Registrar Tipo de Entrada (General o VIP)\n3. Verificar Acceso (Evento Principal)\n4. Verificar Acceso (Zona VIP)\n5. Salir\nIngrese el número de la opción deseada:"
  );
}
