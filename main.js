let nombreIngresado = prompt("Ingrese su nombre");

let montoIngresado = 0;

function ingresarMonto () {
    montoIngresado  = parseInt(prompt(nombreIngresado + " ingrese el monto sobre el cual se realizará el descuento"));
    console.log (nombreIngresado + " ingresó el monto de $" + montoIngresado);
}
ingresarMonto ();

let descuentoIngresado = 0;

function ingresarDescuento () {
    descuentoIngresado = parseInt(prompt(nombreIngresado + " ingrese el valor de descuento a realizar sobre el monto"))
    console.log(nombreIngresado + " ingresó un descuento del " + descuentoIngresado + " % sobre el monto ingresado de $" + montoIngresado);
}
ingresarDescuento ();

function porcentaje(montoIngresado, descuentoIngresado) {
    return montoIngresado - (montoIngresado * descuentoIngresado/100);
} 
let resultado = porcentaje(montoIngresado, descuentoIngresado);

porcentaje ();
alert(nombreIngresado + ", el monto ingresado de $" + montoIngresado + " con un descuento del " + descuentoIngresado + " % da como resultado un importe de $" + resultado);