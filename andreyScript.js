let totalProductos = 0;
let usoCupon10 = 0;
let usoCupon20 = 0;

console.log("Bienvenido al sistema de Checkout de la tienda en linea");

let salir = true;

while (salir) {

    let opcionMenu = Number(prompt(
        "Elija una opción:\n" +
        "1. Agregar productos\n" +
        "2. Aplicar cupones\n" +
        "3. Calcular costos de envío\n" +
        "4. Calcular total a pagar\n" +
        "5. Salir"
    ));

    switch (opcionMenu) {

        case 1:
            let cantidadProductos = Number(prompt("Ingrese la cantidad de productos:"));
            if (isNaN(cantidadProductos) || cantidadProductos <= 0) {
                alert("La cantidad debe ser un número mayor a 0.");
            } else {
                totalProductos += cantidadProductos * 30000;
                alert("Productos agregados. Total parcial: $" + totalProductos);
            }
            break;

        case 2:

            if (totalProductos <= 0) {
                alert("No puedes aplicar un cupón porque no tienes productos.");
                break;
            }

            let cupon = prompt("Agrega el cupón (DTO10 o DTO20):");

            if (cupon === "DTO10") {

                if (usoCupon10 >= 1) {
                    alert("El cupón DTO10 ya fue usado.");
                } else {
                    usoCupon10++;
                    totalProductos = totalProductos * 0.9;
                    alert("Cupón DTO10 aplicado (10% OFF).\nNuevo total: $" + totalProductos);
                }

            } else if (cupon === "DTO20") {

                if (usoCupon20 >= 1) {
                    alert("El cupón DTO20 ya fue usado.");
                } else {
                    usoCupon20++;
                    totalProductos = totalProductos * 0.8;
                    alert("Cupón DTO20 aplicado (20% OFF).\nNuevo total: $" + totalProductos);
                }

            } else {
                alert("Cupón no válido.");
            }

            break;

        case 3:

            if (totalProductos <= 0) {
                alert("No hay productos para calcular envío.");
                break;
            }

            if (totalProductos >= 100000) {
                alert(
                    "Envío GRATIS por compras mayores a 100.000\n" +
                    "Total final: $" + totalProductos
                );
            } else {
                let totalConEnvio = totalProductos + 15000;
                alert(
                    "Subtotal: $" + totalProductos +
                    "\nCosto de envío: $15000" +
                    "\nTotal con envío: $" + totalConEnvio
                );
            }
            break;

        case 4:
            if (totalProductos <= 0) {
                alert("No hay productos en el carrito.");
                break;
            }

            if (totalProductos >= 100000) {
                alert("Total a pagar: $" + totalProductos);
            } else {
                alert("Total a pagar: $" + (totalProductos + 15000));
            }
            break;

        case 5:
            alert("Gracias por usar el sistema.");
            salir = false;
            break;

        default:
            alert("Opción inválida, intenta nuevamente.");
    }
}