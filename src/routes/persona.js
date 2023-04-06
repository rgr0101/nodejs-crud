const express = require('express');
const router = express.Router();
const personaSchema = require("../modelos/persona");

//Operacioes CRUD
//Creamos las rutas que queremos.

//Crear personas.
//Usamos método post
router.post('/persona', (req, res) => {
    const persona = personaSchema(req.body);
    persona.save().then((data) => res.json(data)).catch((error) => res.json({message: error}));
});

//Usamos get para obtener todos las personas
//Obtener todas las personas
router.get('/persona', (req, res) => {
    //const persona = personaSchema(req.body);
    personaSchema.find().then((data) => res.json(data)).catch((error) => res.json({message: error}));
});

//Obtener un usuario por su id
router.get('/persona/:id', (req, res) => {
    const { id } = req.params;
    personaSchema.findById(id).then((data) => res.json(data)).catch((error) => res.json({message: error}));
});

//Usamos metodo put
//Actualizar un usuario
router.put('/persona/:id', (req, res) => {
    const { id } = req.params;
    const { nombre, age, status, sex } = req.body;
    personaSchema.updateOne({_id: id }, { $set: {nombre, age, status, sex}}).then((data) => res.json(data)).catch((error) => res.json({message: error}));
});

//Eliminar un usuario
router.delete('/persona/:id', (req, res) => {
    const { id } = req.params;
    personaSchema.remove({_id: id }).then((data) => res.json(data)).catch((error) => res.json({message: error}));
});

//Exportamos router para usarlo en index.js
module.exports = router;

