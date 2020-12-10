const { response } = require('express')
const express = require('express')
const maesCollection = require('../models/maes-schema')

const addMae = (request, response) => {
    console.log(request.url)
    const maeDoBody = request.body //pegando o que o usuário digitou
    const mae = new maesCollection(maeDoBody)

    mae.save((error) => {
        if (error) {
            return response.status(400).send(error)
        } else {
            return response.status(201).json({
                mensagem: 'POST feito com sucesso',
                mae
            })
        }
    })
}

const updateCelular = (request, response) => {
    const idParam = request.params //pegando o valor do ID mandado na URL
    const celularBody = request.body.celular
    const update = { runValidators: true }

    maesCollection.findByIdAndUpdate(
        idParam,
        { $set: { celular: celularBody } },
        update,
        (error, mae) => {
            console.log('esse é o update - id param: ', idParam, 'e o celular: ', celularBody, update)
            if (error) {
                return response.status(500).send(error)
            } else {
                return response.status(200).send({
                    mensagem: "Celular atualizado com sucesso",
                    mae
                })
            }
        })
}

const getAll = (request, response) => {
    console.log(request.url)

    maesCollection.find((error, mae) => {
        if (error) {
            return response.status(500).send(error)
        } else {
            return response.status(200).send({
                mensagem: 'GET feito com sucesso',
                mae
            })
        }
    })
}




module.exports = {
    addMae,
    updateCelular,
    getAll
}