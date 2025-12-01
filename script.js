/*==========SIMULADOR DE CHECKOUT "TIENDA WEB"=================*/
let subTotal= 0
let descuentoAplicado= 0
let cuponUsado= false
let costoEnvio= 0
let menu= 0

while(menu !==5){
    console.log("\n===== 🛒 MENÚ PRINCIPAL =====")
    console.log("1) Agregar Producto (Precio fijo: 50.000)")
    console.log("2) Aplicar Cupón de Descuento")
    console.log("3) Calcular Costo de Envío")
    console.log("4) Calcular Total a Pagar")
    console.log("5) Salir")

    menu= parseInt(prompt("digita una opcion (1-5)"))

    switch(menu){
        case 1: 
        let cantidad = parseInt(prompt("Cuantos productos deseas agregar"));
            if (cantidad > 0) {
                subTotal += cantidad * 50000;
                console.log("✅ " + cantidad + " producto agregado. Subtotal: $" + subTotal);
            } else {
                console.log("⚠️ Debes ingresar una cantidad válida mayor a 0.");
            }
            break;

        case 2:
            if(cuponUsado){
                console.log("ya usaste un cupon, no puedes usar otro")
            }else{
                let codigoCupon = prompt("Ingresa el código del cupón:");
                if (codigoCupon === "dt010") {
                    descuentoAplicado = subTotal * 0.10;
                    subTotal -= descuentoAplicado;
                    cuponUsado = true;
                    console.log("✅ Cupón DTO10 aplicado. Nuevo subtotal: $" + subTotal);
                } else if (codigoCupon === "dt020") {
                    descuentoAplicado = subTotal * 0.20;
                    subTotal -= descuentoAplicado;
                    cuponUsado = true;
                    console.log("✅ Cupón DTO20 aplicado. Nuevo subtotal: $" + subTotal);
                } else {
                    console.log("❌ Cupón no válido.");
                }
            }

        case 3:
            if (subTotal < 100000) {
                costoEnvio = 15000;
                console.log(" Envío calculado: $" + costoEnvio);
            } else if (subTotal >= 100000) {
                costoEnvio = 0;
                console.log(" Envío gratis ");
            } else {
                console.log("⚠️ Error al calcular envío.");
            }
            break;

        case 4:
            if (costoEnvio === null) {
                console.log(" Debes calcular el costo de envío primero (opción 3).");
            } else {
                let totalPagar = subTotal + costoEnvio;
                console.log("\n===== 🧾 RESUMEN DE COMPRA =====");
                console.log("Subtotal: $" + subTotal);
                console.log("Descuento aplicado: $" + descuentoAplicado);
                console.log("Costo de envío: $" + costoEnvio);
                console.log("TOTAL A PAGAR: $" + totalPagar);
            }
            break;

        case 5:
            console.log("adios, hasta la proxima 🖐️")
            break

        default:
            console.log("❌te equivocaste, intenta otra vez.")
            break
    }

}