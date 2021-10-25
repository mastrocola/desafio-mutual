import express from 'express'
import ContaController from '../controllers/ContaController'

const router = express.Router()

// 1 - Criar conta
router.post('/contas', ContaController.create)

// 2 - Alterar conta
router.put('/contas/:cpf', ContaController.update)

// 3 - Desativar conta
router.put('/contas/:cpf/desativar', ContaController.disable)

// 4 - Ativar conta
router.put('/contas/:cpf/ativar', ContaController.enable)

// 5 - Listar contas
router.get('/contas', ContaController.findAll)

export { router }
