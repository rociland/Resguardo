const { string } = require('joi');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Creamos un modelo que simule la estructura de la BDD
const antecedenteSchema = new Schema({
   _id                     : Number,
   biotipo                 : String,
   fototipo                : String,
   afeccion_cutanea        : String,
   alergias                : String, 
   medicamentos            : String,
   tratamientos_clinicos   : String

});

// Crear el modelo
const Antecedente = mongoose.model( 'Antecedente', antecedenteSchema );

module.exports = Antecedente;