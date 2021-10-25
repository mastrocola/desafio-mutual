import { Request, Response } from 'express'
import { ContaModel } from '../models/ContaModel'
import { StatusCodes } from 'http-status-codes'

class ContaController {
  // 1 - Criar conta
  async create (req: Request, res: Response) {
    const { name, cpf, phone, address } = req.body

    const createdAt = new Date().toISOString()

    const conta = await ContaModel
      .create({ name, cpf, phone, address, createdAt })
      .catch((err) => console.log(`Erro ao cadastrar conta: ${err}`))

    return conta
      ? res.status(StatusCodes.CREATED).json(conta)
      : res.status(StatusCodes.BAD_REQUEST).send()
  }

  // 2 - Alterar conta
  async update (req: Request, res: Response) {
    const { cpf } = req.params

    const { phone, address } = req.body

    await ContaModel.updateOne({ cpf }, { $set: { phone, address } })

    return res.status(StatusCodes.NO_CONTENT).send()
  }

  // 3 - Desativar conta
  async disable (req: Request, res: Response) {
    const { cpf } = req.params

    const disabledAt = new Date().toISOString()

    await ContaModel.updateOne({ cpf }, { $set: { disabledAt } })

    return res.status(StatusCodes.NO_CONTENT).send()
  }

  // 4 - Ativar conta
  async enable (req: Request, res: Response) {
    const { cpf } = req.params

    const disabledAt = null

    await ContaModel.updateOne({ cpf }, { $set: { disabledAt } })

    return res.status(StatusCodes.NO_CONTENT).send()
  }

  // 5 - Listar contas
  async findAll (req: Request, res: Response) {
    const contas = await ContaModel.find()

    return contas.length > 0
      ? res.status(StatusCodes.OK).json(contas)
      : res.status(StatusCodes.NO_CONTENT).send()
  }
}

export default new ContaController()
