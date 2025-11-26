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
        }

    }
}

function agregarProducto() {

    let cantidadProductos = Number(prompt("Ingrese en numeros la cantidad de productos a agregar a tu carrito: "));
    if (isNaN(cantidadProductos) || cantidadProductos <= 0) {
        alert("La cantidad debe ser en numeros y mayor a 0.")
    } else {
        let totalProductos = cantidadProductos * 30000;
        alert("Productos agregados correctamente al carrito.");
    }
}

menuCheckout();