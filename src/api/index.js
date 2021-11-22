import express from 'express'
import listEndpoints from 'express-list-endpoints'
import Routes from './routes'

const api = () => {
  const app = express()
  const router = express.Router()
  const routes = Routes({ router })

  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))
  app.use('/api/v1', routes)
  app.use((request, response) => response.status(404).send({
    code: 404,
    message: 'Not Found :('
  }))

  console.log(listEndpoints(app))

  return app
}

export default api
