import { mongoose } from '../config/database'

const { Schema } = mongoose

export const ContaModel = mongoose.model(
  'Conta',
  new Schema({
    name: {
      type: String,
      minlength: [1, 'O nome não pode ser vazio'],
      maxlength: [50, 'O nome não pode exceder 50 caracteres'],
      required: [true, 'O nome é obrigatório']
    },
    cpf: {
      type: String,
      minlength: [11, 'O CPF deve possuir 11 caracteres'],
      maxlength: [11, 'O CPF deve possuir 11 caracteres'],
      unique: true
    },
    phone: {
        type: String,
        maxlength: [15, 'O telefone não pode exceder 15 caracteres']
    },
    address: {
        type: String,
        maxlength: [30, 'O endereço não pode exceder 30 caracteres']
    },
    createdAt: {
      type: Date,
      required: true
    },
    disabledAt: {
      type: Date,
      default: null
    }
  })
)
