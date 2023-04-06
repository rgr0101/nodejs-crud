const mongoose = require("mongoose");

const personaSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: false
    },
    status: {
        type: String,
        required: false
    },
    sex: {
        type: String,
        required: false
    },
    orientation: {
        type: String,
        required: false
    },
    body_type: {
        type: String,
        required: false
    }
});

//Exportamos.
module.exports = mongoose.model('persona', personaSchema);