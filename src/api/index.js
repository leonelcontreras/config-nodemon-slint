import express from 'express'
import listEndpoints from 'express-list-endpoints'
import { TryCatchMiddleware } from './middlewares'
import Routes from './routes'
import i18n from 'i18n'

const api = () => {
  const app = express()
  const router = express.Router()
  const routes = Routes({ router, tryCatch: TryCatchMiddleware })
  const { HTTP_CODE_NOT_FOUND, HTTP_CODE_SERVER_ERROR } = process.env

  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))
  app.use('/api/v1', routes)
  app.use((request, response) => response.status(HTTP_CODE_NOT_FOUND).send({
    code: Number(HTTP_CODE_NOT_FOUND),
    message: i18n.__('api.not-found')
  }))
  
  app.use((error, request, response, next) => {
    console.log('error -->', error)
    response.status(HTTP_CODE_SERVER_ERROR).send({
      code: Number(HTTP_CODE_SERVER_ERROR),
      message: i18n.__('api.error')
    })
  })

  console.log(listEndpoints(app))

  return app
}

export default api
