const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Creamos un modelo que simule la estructura de la BDD
const turnoSchema = new Schema({
    _id             : Number,
   id_paciente      : Number,
   id_tratamiento   : Number,
   id_estado        : Number,
   fecha_turno      : String,
   hora             : String,
   observacion      : String

});

// Crear el modelo
const Turno = mongoose.model( 'Turno', turnoSchema );

module.exports = Turno;