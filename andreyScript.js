let totalProductos = 0;
let usoCupon10 = 0;
let usoCupon20 = 0;

function menuCheckout() {
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
                agregarProducto();
                break;

            case 2:
                if (validarProductosAntesDeCupon(totalProductos)) {
                    totalProductos = aplicarCupon(totalProductos);
                }
                break;

            case 3:
                costosEnvio(totalProductos);
                break;
            case 4:
                console.log("El total a pagar actualmente es: $" + totalProductos);
                break;

            case 5:
                alert("Gracias por usar el sistema.");
                salir = false;
                break;

            default:
                alert("Opción inválida.");
        }
    }
}

function agregarProducto() {
    let cantidadProductos = Number(prompt("Ingrese la cantidad de productos:"));
    if (isNaN(cantidadProductos) || cantidadProductos <= 0) {
        alert("La cantidad debe ser un número mayor a 0.");
        return;
    }

    totalProductos += cantidadProductos * 30000;
    alert("Productos agregados. Total parcial: $" + totalProductos);
}

function validarProductosAntesDeCupon(totalProductos) {
    if (totalProductos <= 0) {
        alert("No puedes aplicar un cupón porque no tienes productos.");
        return false;
    }
    return true;
}

function aplicarCupon(totalProductos) {

    const Descuento10 = "DTO10";
    const Descuento20 = "DTO20";

    let cuponIngresadoUsuario = prompt("Agrega el cupón completo y como lo tienes con mayusculas:");

    if (usoCupon10 >= 1 && cuponIngresadoUsuario === Descuento10) {
        alert("El cupón DTO10 ya fue usado.");
        return totalProductos;
    }

    if (usoCupon20 >= 1 && cuponIngresadoUsuario === Descuento20) {
        alert("El cupón DTO20 ya fue usado.");
        return totalProductos;
    }

    if (cuponIngresadoUsuario === Descuento20) {
        usoCupon20++;
        console.log("Cupón aplicado correctamente (20% OFF).");
        return totalProductos * 0.8;
    }

    if (cuponIngresadoUsuario === Descuento10) {
        usoCupon10++;
        console.log("Cupón aplicado correctamente (10% OFF).");
        return totalProductos * 0.9;
    }

    alert("Cupón no válido.");
    return totalProductos;
}

function costosEnvio(totalProductos) {

    if (totalProductos >= 100000) {
        alert("Envío gratis por compras superiores a 100.000");
    } else {
        console.log(
            "Subtotal: $" + totalProductos +
            "\nCosto de envío: $15000" +
            "\nTotal final: $" + (totalProductos + 15000)
        );
    }
}

menuCheckout();