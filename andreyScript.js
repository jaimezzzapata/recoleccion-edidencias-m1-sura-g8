let totalProductos = 0;
let usoCupon10 = 0;
let usoCupon20 = 0;

function menuCheckout() {
    console.log("Bienvenido al sistema de Checkout de la tienda en linea");
    let salir = "Continuar";
    while (salir && "Continuar") {

        let opcionMenu = Number(prompt(
            "Elija la opción del menu en numeros del 1 al 5:\n 1. Agregar productos.\n 2. Aplicar cupones.\n 3. Calcular costos de envio.\n " +
            "4. Calcular total a pagar\n 5. Salir"
        ));

        switch (opcionMenu) {
            case 1:
                agregarProducto();
            case 2:
                aplicarCupon(totalProductos);
        }

    }
}

function agregarProducto() {

    let cantidadProductos = Number(prompt("Ingrese en numeros la cantidad de productos a agregar a tu carrito: "));
    if (isNaN(cantidadProductos) || cantidadProductos <= 0) {

        alert("La cantidad debe ser en numeros y mayor a 0.");

    } else {

        let totalProductos = cantidadProductos * 30000;
        alert("Productos agregados correctamente al carrito.");

    }
}


function aplicarCupon(totalProductos) {

    const Descuento10 = "DTO10";
    const Descuento20 = "DTO20";

    let cuponIngresadoUsuario = prompt("Agrega el cupon que deseas utilizar (DTO10 o DTO20):");

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
        return totalProductos - (totalProductos * 0.20);
        alert("Cupon ingresado correctamente.");
    }

    if (cuponIngresadoUsuario === Descuento10) {
        usoCupon10++;
        return totalProductos - (totalProductos * 0.10);
        alert("Cupon ingresado correctamente.");
    }

    alert("Cupón no válido.");
    return totalProductos;
}

menuCheckout();