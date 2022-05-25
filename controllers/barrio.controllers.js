const barrioService = require('../services/barrio.service')

const getAll =  async ( req, res ) => {  //OBTENER TODOS LOS BARRIOS
    try {
        const result = await barrioService.getAll();
        res.status(200).send(result);
       
    } catch (error) {
        res.status(400).send({ error: `${error}` });
    }
}

const getBarrioPorID = async ( req, res ) => {  //OBTENER BARRIO POR ID (PRIMARY KEY)
    try {
        const result = await barrioService.getBarrioPorID(req.params);
        res.status(200).send(result);
       
    } catch (error) {
        res.status(400).send({ error: `${error}` });
    }
}

const getBarrioPorDescripcion = async ( req, res ) => {  //OBTENER BARRIO POR DESCRIPCION (PRIMARY KEY)
    try {
        const result = await barrioService.getBarrioPorDescripcion(req.params);
        res.status(200).send(result);
       
    } catch (error) {
        res.status(400).send({ error: `${error}` });
    }
}

module.exports = { 
    getAll,
    getBarrioPorID,
    getBarrioPorDescripcion
 };