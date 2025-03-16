var express = require('express');
var router = express.Router();
var Cliente = require('../models').Cliente; // Asegúrate de importar el modelo Cliente

// Ruta para obtener todos los clientes
router.get('/clientes', function(req, res, next) {
  Cliente.findAll()
    .then(clientes => {
      res.json(clientes);
    })
    .catch(err => {
      console.log(err);
      res.status(500).send('Error al obtener los clientes');
    });
});

module.exports = router;
