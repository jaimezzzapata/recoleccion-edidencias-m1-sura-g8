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
        subTotal+=50000
        console.log("producto agregado, subtotal: $" + subTotal)
        break

        case 2:
            if(cuponUsado){
                console.log("")
            }

        case 3:

        case 4:

        case 5:
            console.log("adios, hasta la proxima 🖐️")
            break

        default:
            console.log("❌te equivocaste, intenta otra vez.")
            break
    }

}