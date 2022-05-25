const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Creamos un modelo que simule la estructura de la BDD
const barrioSchema = new Schema({
    _id          : Number,
   descripcion   : String

});

// Crear el modelo
const Barrio = mongoose.model( 'Barrio', barrioSchema );

module.exports = Barrio;