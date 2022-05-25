const estadoService = require('../services/estado.service')

const getAll =  async ( req, res ) => {  //OBTENER TODOS LOS ESTADOS
    try {
        const result = await estadoService.getAll();
        res.status(200).send(result);
       
    } catch (error) {
        res.status(400).send({ error: `${error}` });
    }
}

const getEstadoPorID = async ( req, res ) => {  //OBTENER ESTADOS POR ID (PRIMARY KEY)
    try {
        const result = await estadoService.getEstadoPorID(req.params);
        res.status(200).send(result);
       
    } catch (error) {
        res.status(400).send({ error: `${error}` });
    }
}

const getEstadoPorDescripcion = async ( req, res ) => {  //OBTENER ESTADOS POR DESCRIPCION (PRIMARY KEY)
    try {
        const result = await estadoService.getEstadoPorDescripcion(req.params);
        res.status(200).send(result);
       
    } catch (error) {
        res.status(400).send({ error: `${error}` });
    }
}

module.exports = { 
    getAll,
    getEstadoPorID,
    getEstadoPorDescripcion
 };