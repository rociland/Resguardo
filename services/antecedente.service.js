const antecedenteRepository = require('../data/antecedente')
const { esAntecedenteValido } = require('../validaciones/antecedente.validaciones')


module.exports = {  

    getAntecedentePorID : ( params ) => {
        return antecedenteRepository.getAntecedentePorID( params.id )
    },
   
    actualizarAntecedente : ( body, params ) => {

        if(!esAntecedenteValido(body))
            throw new Error("El antecedente ingresado no es valido")

        return antecedenteRepository.actualizarAntecedente(body, params.id)
    },

    agregarAntecedente : ( body ) => {

        if(!esAntecedenteValido(body))
            throw new Error("El antecedente ingresado no es valido")

        return antecedenteRepository.agregarAntecedente(body)
    },

    borrarAntecedente : ( params ) => {

        if( !params.id ){
             throw new Error('Error al consultar el id del registro');
       }
        return antecedenteRepository.borrarAntecedente(params.id)
    }
    
};
