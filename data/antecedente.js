const Antecedente = require('../models/antecedente')

async function getAntecedentePorID( id ) {  // OBTENER ANTECEDENTE POR ID
    const responseDB = await Antecedente.findOne( { _id : id } )
    
    if( responseDB === null){
        throw new Error('No se encontraron registros.')
    }

    return responseDB
}

async function actualizarAntecedente( body, id ) { // ACTUALIZAR ANTECEDENTE POR ID
    const responseDB =  await Antecedente.findOneAndUpdate( { _id : id }, body )

    if( responseDB === null){
        throw new Error(`No se encontró el registro`)
    }
    
    return responseDB
}
    
async function agregarAntecedente( body ) { // DAR DE ALTA ANTECEDENTE 
   
    //BUSCA EL ID DEL ULTIMO REGISTRO DE LA TABLA
    let ultimoRegistro = await Antecedente.find({},{_id:1}).sort({$natural:-1}).limit(1); 
    ultimoRegistro = ultimoRegistro.toString()

    let posicion = 0; //SI NO HAY REGISTROS SETEA LA POSICIÓN EN CERO 
    if((Object.keys(ultimoRegistro).length != 0)){
        posicion = parseInt(ultimoRegistro.replace(/[^0-9]/ig,""))
    }
   
    //GUARDO EL NUEVO PACIENTE CON LOS DATOS OBTENIDOS DEL BODY Y ASIGNO EL ID SIGUIENTE
    const agregarAntecedente = await Antecedente(body)
    agregarAntecedente._id =  posicion + 1
    await agregarAntecedente.save();


    return { msg: `Se agrego nuevo registro` }
}

async function borrarAntecedente( id ) {  // BORRAR ANTECEDENTE POR ID
    const responseDB = await Antecedente.findOneAndDelete( { _id : id } )

    if( !responseDB ){
        throw new Error(`No se encontró el registro`)
    }

    return { msg : "Se elimino con exito el registro", data: responseDB} 
}


module.exports = {
    getAntecedentePorID,
    agregarAntecedente,
    actualizarAntecedente,
    borrarAntecedente
}