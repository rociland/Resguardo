const Barrio = require('../models/barrio') 

async function getAll() { //TODOS LOS DATOS DE LA TABLA 'BARRIO'
    const responseDB = await Barrio.find()
    
    if(Object.keys(responseDB).length === 0){
        throw new Error('No se encontro registros en la tabla "Barrios".')
    }

    return responseDB
}

async function getBarrioPorID( id ) { //FILTRA BARRIO BUSCADO POR ID (Primary Key)
    const responseDB = await Barrio.findOne( { _id : id } )

    if( responseDB == null){
        throw new Error(`No se encontro un barrio con ID ${id} en el registro`)
    }

    return responseDB
}

async function getBarrioPorDescripcion( descripcion ) { //TRAE UN BARRIO BUSCADO POR SU DESCRIPCION
    const responseDB = await Barrio.find( { descripcion } ) 

    if( responseDB.length === 0){
        throw new Error(`No se encontro un barrio con descripcion ${descripcion} en el registro`)
    }

    return responseDB
}

module.exports = {
     getAll,
     getBarrioPorID,
     getBarrioPorDescripcion 
    }