import Validator from '@/validators/Validator'

export default {
  login (credentials) {
    let schema = {
      boleta: Validator.number().integer().empty(),
      password: Validator.string().min(8)
    }
    let messages = {
      number: {
        base: 'Debe ser numérico'
      },
      any: {
        empty: 'Es necesario'
      },
      string: {
        min: 'Mínimo 8 caracteres'
      }
    }
    const { error } = Validator.validate(credentials, schema, { abortEarly: false, language: messages })
    if (error) {
      return {
        status: 'error',
        errors: error.details.map((err) => err.message.replace('password', 'Contraseña').replace('boleta', 'No. Boleta'))
      }
    } else {
      return {
        status: 'ok'
      }
    }
  }
}
