const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const app = express()

dotenv.config()

/**
 * * Carregar variaveis do arquivo .env file, onde chaves de API e senhas são configuradas
 */

const PORT = process.env.PORT || 3000


const index = require('./src/routes/index')
const ajudadora = require('./src/routes/ajudadora-routes')
const mae = require('./src/routes/mae-routes')
const agenda = require('./src/routes/agenda-routes')


mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true
})
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.log(err))

app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/', index)//rota raíz retorna index
app.use('/ajudadora', ajudadora)
app.use('/mae', mae)
app.use('/agenda', agenda)

app.listen(PORT, () => {
    console.log('Está rodando')
})

module.exports = app