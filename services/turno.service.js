const turnoRepository = require('../data/turno')
const {esTurnoValido} = require('../validaciones/turno.validaciones')


module.exports = {
  
    getAll : () => {
        return turnoRepository.getAll()
    },

    getTurnoPorID : ( param ) => {

        if( !param.id ){
            throw new Error('Se requiere el ingreso del ID para realizar la consulta del turno.');
        }
 
        return turnoRepository.getTurnoPorID(param.id)
    },

    getTurnoPorPaciente : ( param ) => {

        if( !param.id_paciente ){
            throw new Error('Se requiere el ingreso del ID del Paciente para realizar la consulta del turno.');
        }
 
        return turnoRepository.getTurnoPorPaciente(param.id_paciente)
    },

    getTurnoPorTratamiento : ( param ) => {

        if( !param.id_tratamiento ){
            throw new Error('Se requiere el ingreso del ID del Tratamiento para realizar la consulta del turno.');
        }
 
        return turnoRepository.getTurnoPorTratamiento(param.id_tratamiento)
    },

    getTurnoPorEstado : ( param ) => {

        if( !param.id_estado ){
            throw new Error('Se requiere el ingreso del ID del Estado para realizar la consulta del turno.');
        }
 
        return turnoRepository.getTurnoPorEstado(param.id_estado)
    },

    getTurnoPorFecha : ( param ) => {

        if( !param.fecha_turno ){
            throw new Error('Se requiere el ingreso de la fecha para realizar la consulta del turno.');
        }
 
        return turnoRepository.getTurnoPorFecha(param.fecha_turno)
    },

    addTurno : ( body ) => {
       
        if(!esTurnoValido(body))
            throw new Error("El turno ingresado no es valido")

        return turnoRepository.addTurno(body)
        
    },

    updateTurno : ( body, params ) => {
        if(!esTurnoValido(body))
            throw new Error("El turno ingresado no es valido")
        return turnoRepository.updateTurno( body, params.id )
    },
    
    deleteTurnoPorID : ( params ) => {

        if( !params.id ){
            throw new Error('Se debe ingresar el ID para poder eliminar el turno');
        }

        return turnoRepository.deleteTurnoPorID(params.id)
    }


}
