//Lo que llamamos paciente sera el cliente 

var antecedenteController = require('../../controllers/antecedente.controllers')

const express = require('express');

const router = express.Router();

const resource = 'antecedente'

const route = `/${resource}`


// CONSULTAR

router.get( `${route}/buscar/:id`, antecedenteController.getAntecedentePorID )


// ACTUALIZAR
router.put( `${route}/modificar/:id`, antecedenteController.actualizarAntecedente ) //modifica un paciente


//CREAR
router.post( `${route}/crear`, antecedenteController.agregarAntecedente )


//BORRAR
router.delete( `${route}/borrar/:id`, antecedenteController.borrarAntecedente )


module.exports = router;