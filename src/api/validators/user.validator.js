import { body } from 'express-validator'
import i18n from 'i18n'

const userValidator = [
  body('name').isString().notEmpty().trim().escape().withMessage(() => i18n.__('api.name')),
  body('email').isEmail().normalizeEmail().withMessage(() => i18n.__('api.email'))
]

export {
  userValidator
}
