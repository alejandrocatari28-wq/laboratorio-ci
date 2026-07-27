function registrarCliente(nombre) {
    return `Cliente registrado: ${nombre}`;
}

function buscarCliente(nombre) {
    return `Buscando cliente: ${nombre}`;
}

module.exports = {
    registrarCliente,
    buscarCliente
};