function crearCuenta(numero) {
    return `Cuenta creada: ${numero}`;
}

function consultarSaldo(saldo) {
    return `Saldo disponible: ${saldo}`;
}

module.exports = {
    crearCuenta,
    consultarSaldo
};