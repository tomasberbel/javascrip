let bandera = true
const producto = [ "computadora", "teclado", "raton","gabinete","ram", "diso duros"]
const metododepago = [ "mercado pago", "efectivo","credito","devito","cheque"]

let carrito = []
let total = 0 

function sumarATOTAL (precio, nombre, cantidad =1) {
    total += precio * cantidad 

    const palabracap = nombre[0].toUpperCase() + nombre.slice(1)

    carrito.push(palabracap + "X" + cantidad)
}

function logicacompra (producto) {
    let cantidad = 1 

    switch(producto){
       case "computadora":
        cantidad = prompt ("¿cuantos \n\n- " + producto + "quieres?")
        sumarATOTAL (30.000, producto, cantidad)
        break

        case "teclado":
            cantidad = prompt ("¿cuantos" + producto + "quieres?")
            sumarATOTAL (4.000, producto, cantidad)
            break
            
        case "raton":
             cantidad = prompt ("¿cuantos" + producto + "quieres?")
            sumarATOTAL (7.000, producto, cantidad)
            break

         case "gabinete":
             cantidad = prompt ("¿cuantos" + producto + "quieres?")
            sumarATOTAL (15.000, producto, cantidad)
             break

         case "ram":
            cantidad = prompt ("¿cuantos" + producto + "quieres?")
             sumarATOTAL (1.000, producto, cantidad)
             break

         case "diso duros":
            cantidad = prompt ("¿cuantos" + producto + "quieres?")
             sumarATOTAL (5.000, producto, cantidad)
            break

         default:
            alert ("no tenemos ese producto")
            break

            
    }
}

function infopago(metododepago){
    if (metododepago === "mercado pago") {
        total = total * 1.10
    }
    alert("el total a pagar es de " + total.toFixed(2))
    bandera = !confirm("¿confirmar compra?")
}


function logicaDEpago (metododepago){
   

    switch(producto){
        case "mercado pago":
         infopago(metododepago)
         break
 
         case "efectivo":
            infopago(metododepago)
             break
             
         case "credito":
            infopago(metododepago)
             break
 
          case "devito":
            infopago(metododepago)
              break
 
          case "cheque":
            infopago(metododepago)
              break
 
         default:
            alert ("no tenemos ese metodo de pago")
            break
        
 
     }
}

while(bandera){
    const valorelegido = prompt("¿que quiers comprar? \n\n- " + producto.join("\n- ")).toLowerCase()

    logicacompra(valorelegido)

    bandera = confirm("¿quieres seguir comprando?")
}

alert(total)
alert(carrito.join("\n- "))

bandera = true

while(bandera){
    const metododepago = prompt("¿como quieres pagar? \n\n-" + metododepago.join("\n- ")).toLowerCase()

   logicaDEpago(metododepago)

   if(bandera){
       bandera = !confirm("¿cancelar compra?")

   }
   
}
