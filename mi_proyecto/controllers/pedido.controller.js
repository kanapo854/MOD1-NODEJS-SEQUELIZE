const { Pedido } = require('../models');

exports.obtenerPedidos = async (req, res) => {
    const pedidos = await Pedido.findAll();
    res.json(pedidos);
};

exports.crearPedido = async (req, res) => {
    const pedido = await Pedido.create(req.body);
    res.status(201).json(pedido);
};

// Obtener un pedido por ID
exports.obtenerPedidoPorId = async (req, res) => {
    try {
        const pedido = await Pedido.findByPk(req.params.id);
        if (!pedido) {
            return res.status(404).json({ mensaje: 'Pedido no encontrado' });
        }
        res.json(pedido);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Actualizar un pedido por ID
exports.actualizarPedido = async (req, res) => {
    try {
        const pedido = await Pedido.findByPk(req.params.id);
        if (!pedido) {
            return res.status(404).json({ mensaje: 'Pedido no encontrado' });
        }
        await pedido.update(req.body);
        res.json(pedido);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Eliminar un pedido por ID
exports.eliminarPedido = async (req, res) => {
    try {
        const pedido = await Pedido.findByPk(req.params.id);
        if (!pedido) {
            return res.status(404).json({ mensaje: 'Pedido no encontrado' });
        }
        await pedido.destroy();
        res.json({ mensaje: 'Pedido eliminado' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};