const express = require('express')
const router = express.Router()
const controller = require('../controllers/agenda-controller')

/**
@route GET agenda
@desc Traz a agenda das ajudadoras cadastradas
@access Public 
@endpoint http://localhost:porta/agenda
**/
router.get('/', controller.getAll)

/**
@route POST agenda
@desc Cria uma data na agenda
@access Public 
@endpoint http://localhost:porta/agenda/criar
**/
router.post('/criar', controller.addDatas)

/**
@route DELETE agenda
@desc Apaga a agenda por id
@access Public 
@endpoint http://localhost:porta/agenda/apagar
**/
router.delete('/deletar/:id', controller.deleteAgenda)

module.exports = router