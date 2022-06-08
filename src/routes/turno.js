const express = require('express');

const router = express.Router();

const resource = 'turnos'

const route = `/${resource}`

var turnoController = require('../../controllers/turno.controllers')

// CONSULTAR
router.get( route, turnoController.getAll ) 

router.get( `${route}/buscar/id/:id`, turnoController.getTurnoPorID)

router.get( `${route}/buscar/idPaciente/:id_paciente`, turnoController.getTurnoPorPaciente)

router.get( `${route}/buscar/idTratamiento/:id_tratamiento`, turnoController.getTurnoPorTratamiento)

router.get( `${route}/buscar/idEstado/:id_estado`, turnoController.getTurnoPorEstado)

router.get( `${route}/buscar/fecha/:fecha_turno`, turnoController.getTurnoPorFecha)

// CREAR
router.post( `${route}/crear`, turnoController.addTurno )

// ACTUALIZAR
router.put( `${route}/modificar/:id`, turnoController.updateTurno ) 

// BORRAR
router.delete( `${route}/borrar/:id`, turnoController.deleteTurnoPorID )

module.exports = router;