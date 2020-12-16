const mongoose = require('mongoose')
const dotEnv = require('dotenv')

dotEnv.config()

const connect = () => {
  mongoose.connect(process.env.MONGO_URI,
    {
      useNewUrlParser: true, 
      useFindAndModify: false,
      useCreateIndex: true,
      useUnifiedTopology: true
    })
  const connection = mongoose.connection
  connection.on('error', () => console.error('Erro ao se conectar!'))
  connection.once('open', () => console.log('Estamos conectadas ao Mongo!'))
}

module.exports = { 
    connect
 }

