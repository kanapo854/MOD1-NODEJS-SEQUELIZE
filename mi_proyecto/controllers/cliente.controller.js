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

//obtener un cliente por ID
exports.obtenerClientePorId = async (req, res) => {
    try {
        const cliente = await Cliente.findByPk(req.params.id);
        if (!cliente) {
            return res.status(404).json({ mensaje: 'Cliente no encontrado' });
        }
        res.json(cliente);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Actualizar un cliente por ID
exports.actualizarCliente = async (req, res) => {
    try {
        const cliente = await Cliente.findByPk(req.params.id);
        if (!cliente) {
            return res.status(404).json({ mensaje: 'Cliente no encontrado' });
        }
        await cliente.update(req.body);
        res.json(cliente);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Eliminar un cliente por ID
exports.eliminarCliente = async (req, res) => {
    try {
        const cliente = await Cliente.findByPk(req.params.id);
        if (!cliente) {
            return res.status(404).json({ mensaje: 'Cliente no encontrado' });
        }
        await cliente.destroy();
        res.json({ mensaje: 'Cliente eliminado' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};