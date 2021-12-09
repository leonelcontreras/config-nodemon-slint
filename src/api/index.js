import express from 'express'
import listEndpoints from 'express-list-endpoints'
import { TryCatchMiddleware } from './middlewares'
import Routes from './routes'
import i18n from 'i18n'

const api = () => {
  const app = express()
  const router = express.Router()
  const routes = Routes({ router, tryCatch: TryCatchMiddleware })
  const { API_HTTP_CODE_NOT_FOUND, STATUS_CODE_SERVER_ERROR } = process.env

  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))
  app.use('/api/v1', routes)
  app.use((request, response) => response.status(404).send({
    code: Number(API_HTTP_CODE_NOT_FOUND),
    message: i18n.__('api.not-found')
  }))

  app.use((error, request, response, next) => {
    console.log('Error -->', error.stack)
    return response.status(STATUS_CODE_SERVER_ERROR).send({
      error: 'Something wrong happend, please try again!'
    })
  })

  console.log(listEndpoints(app))

  return app
}

export default api
