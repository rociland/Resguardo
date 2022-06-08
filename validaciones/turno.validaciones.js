//https://www.npmjs.com/package/joi
//https://joi.dev/api/?v=17.4.2
//joi le permite describir sus datos utilizando un lenguaje simple, intuitivo y legible.

const joi = require('joi');

const esTurnoValido = ( body ) => { 
    const schema = joi.object({
        _id             : joi.number().integer(),
        id_paciente     : joi.number().integer(),
        id_tratamiento  : joi.number().integer(),
        id_estado       : joi.number().integer(),
        fecha_turno     : joi.string(),
        hora            : joi.string(),
        observacion     : joi.string()
    });

    const result = schema.validate(body);
    if(result.error){
        throw new Error(`${result.error.details[0].message}`)
    }

   return true 

}

module.exports = {
    esTurnoValido
}