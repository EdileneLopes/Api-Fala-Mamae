const mongoose = require('mongoose')
const Schema = mongoose.Schema

const agendaSchema =  new Schema({
  ajudadoraId: {
    type: Schema.Types.ObjectId, 
    ref: 'ajudadora',
    required: true
  },
  
  datas:{ 
    type: [Date], 
    required: true
  }  

  
})

const agendaCollection = mongoose.model('agenda', agendaSchema)

module.exports = agendaCollection