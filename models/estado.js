const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Creamos un modelo que simule la estructura de la BDD
const estadoSchema = new Schema({
    _id          : Number,
   descripcion   : String

});

// Crear el modelo
const Estado = mongoose.model( 'Estado', estadoSchema );

module.exports = Estado;