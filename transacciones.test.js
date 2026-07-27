const {registrarCliente, buscarCliente} = require('./clientes');

test('Registrar cliente correctamente', () => {
    expect(registrarCliente("Juan"))
    .toBe("Cliente registrado: Juan");
});

test('Buscar cliente correctamente', () => {
    expect(buscarCliente("Juan"))
    .toBe("Buscando cliente: Juan");
});