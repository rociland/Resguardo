const antecedenteService = require('../services/antecedente.service')

const getAntecedentePorID =  async ( req, res ) => { // OBTENER ANTECEDENTES
    try {
        
        const result = await antecedenteService.getAntecedentePorID(req.params);
        res.status(200).send(result); 
    } catch (error) {
        res.status(400).send({ error: `${error}` });
    }
}

const actualizarAntecedente = async ( req, res ) => { // ACTUALIZAR ANTECEDENTE
    try {
        const result = await antecedenteService.actualizarAntecedente(req.body, req.params);
        res.status(200).send(result); 
       
    } catch (error) {
        res.status(400).send({ error: `${error}` });
    }
    
}

const agregarAntecedente = async ( req, res ) => { //CREAR ANTECEDENTE
    try {
        const result = await antecedenteService.agregarAntecedente(req.body)
        res.status(200).send(result); 
    } catch (error) {
        res.status(400).send({ error: `${error}` });
    }
}

const borrarAntecedente = async ( req, res ) => { //ELIMINAR ANTECEDENTE

    try {
        const result = await antecedenteService.borrarAntecedente(req.params)
        res.status(200).send(result); 

    } catch (error) {
        res.status(400).send({ error: `${error}` });
    }
}

module.exports = { 
    getAntecedentePorID,
    agregarAntecedente,
    actualizarAntecedente,
    borrarAntecedente
}