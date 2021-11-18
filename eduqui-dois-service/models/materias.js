const mongoose = require ('mongoose');

const materiaSchema = mongoose.Schema({
    materia: {type: String, required: true},
    titulo: {type: String, required: true},
    conteudo: {type: String, required: true},
})

module.exports = mongoose.model('Materia', materiaSchema)