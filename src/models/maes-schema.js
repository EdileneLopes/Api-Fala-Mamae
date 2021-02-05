const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

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

//antes de salvar, encriptar a senha

maeSchema.pre('save', async function(next) {
    const hash = await bcrypt.hash(this.password, 10)
    this.password = hash

    next()
})

const maesCollection = mongoose.model('mae', maeSchema)

module.exports =   maesCollection