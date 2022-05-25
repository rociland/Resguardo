const estadoRepository = require('../data/estado')

module.exports = {
  
    getAll : () => {
        return estadoRepository.getAll()
    },

    getEstadoPorID : ( param ) => {

        if( !param.id ){
            throw new Error('Se requiere el ingreso del ID para realizar la consulta del estado.');
        }
 
        return estadoRepository.getEstadoPorID(param.id)
    },

    getEstadoPorDescripcion : ( param ) => {

        if( !param.descripcion ){
            throw new Error('Se requiere el ingreso de la descripcion para realizar la consulta del estado.');
        }

        return estadoRepository.getEstadoPorDescripcion(param.descripcion)
    },


}
