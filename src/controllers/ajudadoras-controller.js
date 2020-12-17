const express = require('express')
const AjudadorasCollection = require('../models/ajudadora-schema')


const getAll = (request, response) => {
    console.log(request.url)

    AjudadorasCollection.find((error, ajudadora) => {
        if (error) {
            return response.status(500).send(error)
        } else {
            return response.status(200).send({
                mensagem: 'GET feito com sucesso',
                ajudadora
            })
        }
    })
}

const getByName = (request, response) => {
    console.log(request.url)
    const nomeQuery= req.query

    AjudadorasCollection.findOne(nomeQuery, (error, ajudadora) => {
        if (error) {
            return response.status(500).send(error)
        } else {
            return response.status(200).send({
                mensagem: 'GET feito com sucesso',
                ajudadora
            })
        }
    })
}



const addAjudadora = (request, response) => {
    console.log(request.url)
    const ajudadoraDoBody = request.body //pegando o que o usuário digitou
    const ajudadora = new AjudadorasCollection(ajudadoraDoBody)

    ajudadora.save((error) => {
        if (error) {
            return response.status(400).send(error)
        } else {
            return response.status(201).json({
                mensagem: 'POST feito com sucesso',
                ajudadora
            })
        }
    })
}

const updateAjudadora = (request, response) => {
    const idParam = request.params.id
    const ajudadoraBody = request.body
    const novo = { new: true } //quando o documento for inserido vai retornar o valor modificado e não o original, que é o que acontece por padrão

    AjudadorasCollection.findByIdAndUpdate(
        idParam,
        ajudadoraBody,
        novo,
        (error, ajudadora) => {
            if (error) {
                return response.status(500).send(error)
            } else if (ajudadora) {
                return response.status(200).send(ajudadora)
            } else {
                return response.sendStatus(404)
            }
        }
    )
}

const deleteAjudadora = (request, response) => {
    const idParam = request.params.id
    AjudadorasCollection.findByIdAndDelete(idParam, (error, ajudadora) => {
        if (error) {
            return response.status(500).json({
                mensagem: 'Ajudadora não encontrada...não foi possível apagar.'
            })
        } else if (ajudadora) {
            console.log(ajudadora)
            return response.status(200).send('A ajudadora foi apagada com sucesso :(')
        } else {

        }
    })
}



module.exports = {
    getAll,
    getByName,
    addAjudadora,
    updateAjudadora,
    deleteAjudadora

}