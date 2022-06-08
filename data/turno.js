const Turno = require('../models/turno') 

async function getAll() { //TODOS LOS DATOS DE LA TABLA 'TURNOS'
    const responseDB = await Turno.find()
    
    if(Object.keys(responseDB).length === 0){
        throw new Error('No se encontro registros en la tabla "Turnos".')
    }

    return responseDB
}

async function getTurnoPorID( id ) { //FILTRA TURNOS BUSCADO POR ID (Primary Key)
    const responseDB = await Turno.findOne( { _id : id } )

    if( responseDB == null){
        throw new Error(`No se encontro un turno con ID ${id} en el registro`)
    }

    return responseDB
}

async function getTurnoPorPaciente( id_paciente ) { //TRAE TURNO BUSCADO POR ID_PACIENTE
    const responseDB = await Turno.find( { id_paciente } )

    if( responseDB.length === 0){
        throw new Error(`No se encontro un Turno para el paciente con ID ${id_paciente} en el registro`)
    }

    return responseDB
}

async function getTurnoPorTratamiento( id_tratamiento ) { //TRAE TURNO BUSCADO POR ID_TRATAMIENTO
    const responseDB = await Turno.find( { id_tratamiento } )

    if( responseDB.length === 0){
        throw new Error(`No se encontron turnos para el tratamiento con ID ${id_tratamiento} en el registro`)
    }

    return responseDB
}

async function getTurnoPorEstado( id_estado) { //TRAE TURNOS BUSCADO POR ID_ESTADO
    const responseDB = await Turno.find( { id_estado } )

    if( responseDB.length === 0){
        throw new Error(`No se encontron turnos con el estado con ID ${id_estado} en el registro`)
    }

    return responseDB
}

async function getTurnoPorFecha( fecha_turno) { //TRAE TURNO BUSCADO POR FECHA
    const responseDB = await Turno.find( { fecha_turno } )

    if( responseDB.length === 0){
        throw new Error(`No se encontron turnos para la fecha ${fecha_turno} en el registro`)
    }

    return responseDB
}

async function addTurno( body ) { //ALTA DE UN TURNO
    
    //BUSCA EL ID DEL ULTIMO REGISTRO DE LA TABLA
    let ultimoRegistro = await Turno.find({},{_id:1}).sort({$natural:-1}).limit(1); 
    ultimoRegistro = ultimoRegistro.toString()

    let posicion = 0; //SI NO HAY REGISTROS SETEA LA POSICIÓN EN CERO 
    if((Object.keys(ultimoRegistro).length != 0)){
        posicion = parseInt(ultimoRegistro.replace(/[^0-9]/ig,""))
    }
   
    //GUARDO EL NUEVO PACIENTE CON LOS DATOS OBTENIDOS DEL BODY Y ASIGNO EL ID SIGUIENTE
    const agregarTurno = await Turno(body)
    agregarTurno._id =  posicion + 1

    await agregarTurno.save();


    return { msg: `Se agrego nuevo turno` }
}

async function updateTurno( body, id) { //ACTUALIZA TURNO POR ID
    const responseDB =  await Turno.findOneAndUpdate( { _id : id } ,body ) 

    if( responseDB._id.toString() !== id ){
        throw new Error(`No se encontró el turno indicado` )
    }

    return { msg: `Se actualizo el turno` }

}

async function deleteTurnoPorID( id ) {  // ELIMINAR TURNO POR ID
    const responseDB = await Turno.findOneAndDelete( { _id : id } )

    if( !responseDB ){
        throw new Error(`No se encontró el turno ` )
    }
    return { msg : "Se elimino con exito el turno indicado", resultado: responseDB} 
}

module.exports = {
     getAll,
     getTurnoPorID,
     getTurnoPorPaciente,
     getTurnoPorTratamiento,
     getTurnoPorEstado,
     getTurnoPorFecha,
     addTurno,
     updateTurno,
     deleteTurnoPorID
    }