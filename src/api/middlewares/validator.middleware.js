import { validationResult } from 'express-validator'

const validatorMiddleware = (request, response, next) => {
  const { HTTP_CODE_BAD_REQUEST } = process.env
  const errors = validationResult(request)

  return (errors.isEmpty())
    ? next()
    : response.status(HTTP_CODE_BAD_REQUEST).send({
      code: Number(HTTP_CODE_BAD_REQUEST),
      message: errors.array()
    })
}

export default validatorMiddleware
