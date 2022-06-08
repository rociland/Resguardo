const turnoService = require('../services/turno.service')

const getAll =  async ( req, res ) => {  //OBTENER TODOS LOS TURNOS
    try {
        const result = await turnoService.getAll();
        res.status(200).send(result);
       
    } catch (error) {
        res.status(400).send({ error: `${error}` });
    }
}

const getTurnoPorID = async ( req, res ) => {  //OBTENER TURNOS POR ID (PRIMARY KEY)
    try {
        const result = await turnoService.getTurnoPorID(req.params);
        res.status(200).send(result);
       
    } catch (error) {
        res.status(400).send({ error: `${error}` });
    }
}

const getTurnoPorPaciente = async ( req, res ) => {  //OBTENER TURNOS POR PACIENTE 
    try {
        const result = await turnoService.getTurnoPorPaciente(req.params);
        res.status(200).send(result);
       
    } catch (error) {
        res.status(400).send({ error: `${error}` });
    }
}

const getTurnoPorTratamiento = async ( req, res ) => {  //OBTENER TURNOS POR TRATAMIENTO
    try {
        const result = await turnoService.getTurnoPorTratamiento(req.params);
        res.status(200).send(result);
       
    } catch (error) {
        res.status(400).send({ error: `${error}` });
    }
}

const getTurnoPorEstado = async ( req, res ) => {  //OBTENER TURNOS POR ESTADO
    try {
        const result = await turnoService.getTurnoPorEstado(req.params);
        res.status(200).send(result);
       
    } catch (error) {
        res.status(400).send({ error: `${error}` });
    }
}

const getTurnoPorFecha = async ( req, res ) => {  //OBTENER TURNOS POR FECHA
    try {
        const result = await turnoService.getTurnoPorFecha(req.params);
        res.status(200).send(result);
       
    } catch (error) {
        res.status(400).send({ error: `${error}` });
    }
}

const addTurno = async ( req, res ) => { // DAR DE ALTA TURNOS
    const body = req.body
    try {
        const result = await turnoService.addTurno(body)
        res.status(200).send(result);
    } catch (error) {
        res.status(400).send({ error: `${error}` });
    }
}

const updateTurno = async ( req, res ) => { // ACTUALIZA TURNOS POR ID
    try {
        const result = await turnoService.updateTurno( req.body, req.params);
        res.status(200).send(result);
    } catch (error) {
        res.status(400).send({ error: `${error}` });
    }
}

const deleteTurnoPorID = async ( req, res ) => { // ELIMINA TURNOS POR ID
    try {
        const result = await turnoService.deleteTurnoPorID(req.params);
        res.status(200).send(result);
    } catch (error) {
        res.status(400).send({ error: `${error}` });
    }
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