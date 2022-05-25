const Estado = require('../models/estado') 

async function getAll() { //TODOS LOS DATOS DE LA TABLA 'BARRIO'
    const responseDB = await Estado.find()
    
    if(Object.keys(responseDB).length === 0){
        throw new Error('No se encontro registros en la tabla "Barrios".')
    }

    return responseDB
}

async function getEstadoPorID( id ) { //FILTRA ESTADO BUSCADO POR ID (Primary Key)
    const responseDB = await Estado.findOne( { _id : id } )

    if( responseDB == null){
        throw new Error(`No se encontro un estado con ID ${id} en el registro`)
    }

    return responseDB
}

async function getEstadoPorDescripcion( descripcion ) { //TRAE UN ESTADO BUSCADO POR SU DESCRIPCION
    const responseDB = await Estado.find( { descripcion } ) 

    if( responseDB.length === 0){
        throw new Error(`No se encontro un estado con descripcion ${descripcion} en el registro`)
    }

    return responseDB
}

module.exports = {
     getAll,
     getEstadoPorID,
     getEstadoPorDescripcion 
    }