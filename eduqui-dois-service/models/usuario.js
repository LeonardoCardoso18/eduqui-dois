const mongoose = require ('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const usuarioSchema = mongoose.Shema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true}
})

uniqueValidator.plugin(uniqueValidator)

module.exports = mongoose.model('Usuario', usuarioSchema)