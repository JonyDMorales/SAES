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
        errors: error.details.map((err) => err.message.replace('password', '').replace('boleta', '').replace('""', '').replace('\\', '').trim())
      }
    } else {
      return {
        status: 'ok'
      }
    }
  },
  email (email) {
    let schema = {
      email: Validator.string().email()
    }
    let messages = {
      string: {
        email: 'Formato no válido'
      }
    }
    const { error } = Validator.validate(email, schema, { abortEarly: false, language: messages })
    if (error) {
      return {
        error: true,
        errors: error.details.map((err) => err.message.replace('email', '').replace('""', '').replace('\\', '').trim())
      }
    } else {
      return {
        error: false
      }
    }
  }
}
