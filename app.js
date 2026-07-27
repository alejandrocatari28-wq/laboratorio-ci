const clientes = require('./clientes');
const cuentas = require('./cuentas');
const transacciones = require('./transacciones');


function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}


// Integración de módulos

console.log(clientes.registrarCliente("Alejandro"));
console.log(clientes.buscarCliente("Alejandro"));

console.log(cuentas.crearCuenta("001"));
console.log(cuentas.consultarSaldo(500));

console.log(transacciones.depositar(200));
console.log(transacciones.retirar(100));


module.exports = {
    sumar,
    restar
};