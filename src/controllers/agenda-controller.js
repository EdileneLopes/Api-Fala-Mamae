const express = require('express')
const agendaCollection = require('../models/agenda-schema')

const getAll = (request, response) => {
    console.log(request.url)

    agendaCollection
    .find()
    .populate('ajudadora')
    .exec
        ((error, agenda) => {
        if (error) {
            return response.status(500).send(error)
        } else {
            return response.status(200).send({
                mensagem: 'GET feito com sucesso',
                agenda
            })
        }
    })
   
}



const addDatas = (request, response) => {
    console.log(request.url)
    const ajudadoraId = request.body.id
    const datasBody = request.body //pegando o que o usuário digitou
    const agenda = new agendaCollection(datasBody)

    agenda.save((error) => {

        if (error) {
            console.log(error)
            return response.status(400).send(error)
        } else {
            return response.status(201).json({
                mensagem: 'POST feito com sucesso',
                agenda
            })
        }
    })
}

const deleteAgenda = (request, response) => {
    const idParam = request.params.id
    agendaCollection.findByIdAndDelete(idParam, (error, agenda) => {
        if (error) {
            return response.status(500).json({
                mensagem: 'Agenda não encontrada...não foi possível apagar.'
            })
        } else if (agenda) {
            return response.status(200).send('A agenda foi apagada com sucesso.')
        } else {

        }
    })
}

module.exports = {
    getAll,
    addDatas,
    deleteAgenda
}