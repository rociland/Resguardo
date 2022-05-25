//https://www.npmjs.com/package/joi
//https://joi.dev/api/?v=17.4.2
//joi le permite describir sus datos utilizando un lenguaje simple, intuitivo y legible.

const joi = require('joi');

const esAntecedenteValido = ( body ) => { 
    const schema = joi.object({
        _id                     : joi.number().integer(),
        biotipo                 : joi.string(),
        fototipo                : joi.string(),
        afeccion_cutanea        : joi.string(),
        alergias                : joi.string(),
        medicamentos            : joi.string(),
        tratamientos_clinicos   : joi.string()
    });

    const result = schema.validate(body);
    
    if(result.error){
        throw new Error(`${result.error.details[0].message}`)
    }

   return true 

}

module.exports = {
    esAntecedenteValido
}