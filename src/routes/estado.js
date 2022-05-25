const express = require('express');

const router = express.Router();

const resource = 'estados'

const route = `/${resource}`

var estadoController = require('../../controllers/estado.controllers')

// CONSULTAR
router.get( route, estadoController.getAll ) 

router.get( `${route}/buscar/id/:id`, estadoController.getEstadoPorID)

router.get( `${route}/buscar/descripcion/:descripcion`, estadoController.getEstadoPorDescripcion )

module.exports = router;