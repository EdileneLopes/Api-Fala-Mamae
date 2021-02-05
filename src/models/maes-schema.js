const mongoose = require('mongoose')
const Schema = mongoose.Schema

const maeSchema = new Schema ({
    nome: {
        type: String,
        maxlength: 50,
        required: true
    },
    email: {
        type: String,
        maxlength: 30,
        unique: true,
        required: true,
        lowercase: true
    },
    celular: {
        type: Number,
        required: true
    },
    password:{
        type: String,
        required: true,
        select: false  //para não aparecer em nunhuma listagem
    }
    
}, { timestamps: true });

const maesCollection = mongoose.model('mae', maeSchema)

module.exports =   maesCollection