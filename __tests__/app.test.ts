import { app } from '../src/config/server'
import request from 'supertest'
import { StatusCodes } from 'http-status-codes'
import { mongoose } from '../src/config/database'

const cpf: string = '08112331979'

describe('Testes API', () => {
  it('1 - Criar conta', async () => {
    const response = await request(app)
      .post('/contas')
      .send({
        name: 'Gabriela Muniz de Almeida',
        cpf: cpf,
        phone: '43992009339',
        address: 'R. Dr. Lauro Mussi, 202'
      })

    expect(response.statusCode).toEqual(StatusCodes.CREATED)
  })

  it('2 - Alterar conta', async () => {
    const response = await request(app)
      .put(`/contas/${cpf}`)
      .send({
        phone: '43984361700',
        address: 'R. Araçatuba, 500'
      })

    expect(response.statusCode).toEqual(StatusCodes.NO_CONTENT)
  })

  it('3 - Desativar conta', async () => {
    const response = await request(app).put(`/contas/${cpf}/desativar`)

    expect(response.statusCode).toEqual(StatusCodes.NO_CONTENT)
  })

  it('4 - Ativar conta', async () => {
    const response = await request(app).put(`/contas/${cpf}/ativar`)

    expect(response.statusCode).toEqual(StatusCodes.NO_CONTENT)
  })

  it('5 - Listar contas', async () => {
    const response = await request(app).get('/contas')

    expect(response.statusCode).toEqual(StatusCodes.OK)
  })
})

afterAll(() => mongoose.disconnect())
