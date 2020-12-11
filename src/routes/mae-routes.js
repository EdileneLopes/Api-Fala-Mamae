const express = require('express')
const router = express.Router()
const controller = require('../controllers/maes-controllers')

/**
@route POST mãe
@desc Cria uma nova mãe na lista
@access Public 
@endpoint http://localhost:porta/mae/criar
**/
router.post('/criar', controller.addMae)

/**
@route PATCH mãe
@desc Altera o celular de uma mãe
@access Public 
@endpoint http://localhost:porta/mae/alterar/:id
**/
router.patch('/alterar/:id', controller.updateCelular)

/**
@route GET mãe
@desc Tarz todas as mães cadastradas
@access Public 
@endpoint http://localhost:porta/mae/maes
**/
router.get('/maes', controller.getAll)

module.exports = router