import express from 'express'
import listEndpoints from 'express-list-endpoints'
import Routes from './routes'
import i18n from 'i18n'

const api = () => {
  const app = express()
  const router = express.Router()
  const routes = Routes({ router })
  const { API_HTTP_CODE_NOT_FOUND } = process.env
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))
  app.use('/api/v1', routes)
  app.use((request, response) => response.status(404).send({
    code: Number(API_HTTP_CODE_NOT_FOUND),
    message: i18n.__('api.not-found')
  }))

  console.log(listEndpoints(app))

  return app
}

export default api
