const express = require('express');
const miaplicacion = express();
//requerimos mongoose para utilizarla
const mongoose = require('mongoose');
//Importamos nuestras rutas
const personaRoutes = require('./routes/persona');

//middleware
//Le agrega una parte de las rutas que quiero usar.
miaplicacion.use(express.json());
miaplicacion.use('/crud', personaRoutes);

//rutas (routes)
miaplicacion.get("/", (req, res) => {
    res.send("CRUD");
})

//Conectando con mongo Atlas
mongoose.connect(mongodb+srv://<username>:<password>@<cluster-name>.mongodb.net/<database-name>?retryWrites=true&w=majority
).then(() => console.log("Conectado a mongo")).catch((error) => console.error(error));

//Levantamos server
miaplicacion.listen(3000, () => console.log("El servidor esta escuchando"));





