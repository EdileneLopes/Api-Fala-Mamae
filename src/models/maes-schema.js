const mongoose = require('mongoose')
const Schema = mongoose.Schema

const maeSchema = new Schema ({
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
    
}, { timestamps: true });

const maesCollection = mongoose.model('mae', maeSchema)

module.exports =   maesCollection