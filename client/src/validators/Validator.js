import Joi from 'joi'

export default {
  loginAlumno (credentials) {
    const schema = {
      boleta: Joi.number().integer().min(2000000000).max(2020000000),
      password: Joi.string().min(8)
    }

    const { error } = Joi.validate(credentials, schema, {abortEarly: false})

    if (error) {
      return {
        status: 'error',
        errors: error.details.map((err) => err.message)
      }
    } else {
      return {
        status: 'ok'
      }
    }
  }
}
