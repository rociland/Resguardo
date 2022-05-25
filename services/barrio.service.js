const barrioRepository = require('../data/barrio')

module.exports = {
  
    getAll : () => {
        return barrioRepository.getAll()
    },

    getBarrioPorID : ( param ) => {

        if( !param.id ){
            throw new Error('Se requiere el ingreso del ID para realizar la consulta del barrio.');
        }
 
        return barrioRepository.getBarrioPorID(param.id)
    },

    getBarrioPorDescripcion : ( param ) => {

        if( !param.descripcion ){
            throw new Error('Se requiere el ingreso de la descripcion para realizar la consulta del barrio.');
        }

        return barrioRepository.getBarrioPorDescripcion(param.descripcion)
    },


}
