const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ajudadoraSchema = new Schema ({
    nome: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    celular: {
        type: Number,
        required: true
    },
    especialidade: {
        type: String,
        required: true
    }


    
})

const ajudadorasCollection = mongoose.model('ajudadora', ajudadoraSchema)

module.exports =   ajudadorasCollection
