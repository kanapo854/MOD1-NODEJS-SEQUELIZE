const { Cliente } = require('../models');

exports.obtenerClientes = async (req, res) => {
    console.log("obteniendo clientes...");
    const clientes = await Cliente.findAll();
    res.json(clientes);
};

exports.crearCliente = async (req, res) => {
    console.log("creando cliente")
    const cliente = await Cliente.create(req.body);
    res.status(201).json(cliente);
};