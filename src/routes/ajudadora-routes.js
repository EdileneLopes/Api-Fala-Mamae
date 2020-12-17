const express = require('express')
const router = express.Router()
const controller = require('../controllers/ajudadoras-controller')

/**
@route GET ajudadora
@desc Tarz todas as ajudadoras cadastradas
@access Public 
@endpoint http://localhost:porta/ajudadoras
**/
router.get('/ajudadoras', controller.getAll)

/**
@route GET ajudadora
@desc Tarz a primeira ajudadora encontrada pelo nome
@access Public 
@endpoint http://localhost:porta/
**/
router.get('/ajudadoras', controller.getByName)

/**
@route POST ajudadora
@desc Cria uma nova ajudadora na lista
@access Public 
@endpoint http://localhost:porta/criar
**/
router.post('/criar', controller.addAjudadora)

/**
@route PUT ajudadora
@desc Alterar uma nova ajudadora a partir do ID
@access Public 
@endpoint http://localhost:porta/alterar/:id
**/
router.put('/alterar/:id', controller.updateAjudadora)

/**
@route DELETE ajudadora
@desc Apagar uma nova ajudadora a partir do ID
@access Public 
@endpoint http://localhost:porta/apagar/:id
**/
router.delete('/apagar/:id', controller.deleteAjudadora)


module.exports = router