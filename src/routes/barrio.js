const express = require('express');

const router = express.Router();

const resource = 'barrios'

const route = `/${resource}`

var barrioController = require('../../controllers/barrio.controllers')

// CONSULTAR
router.get( route, barrioController.getAll ) 

router.get( `${route}/buscar/id/:id`, barrioController.getBarrioPorID)

router.get( `${route}/buscar/descripcion/:descripcion`, barrioController.getBarrioPorDescripcion )

module.exports = router;