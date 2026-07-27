function depositar(monto) {
    return `Depósito realizado: ${monto}`;
}

function retirar(monto) {
    return `Retiro realizado: ${monto}`;
}

module.exports = {
    depositar,
    retirar
};