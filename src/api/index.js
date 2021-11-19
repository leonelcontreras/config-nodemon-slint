import express from 'express'
import listEndpoints from 'express-list-endpoints'

const api = () => {
  const app = express()
  const router = express.Router()

  router.post('/test', (request, response) => {
    const { name, age } = request.body
    return response.send({ name, age })
  })

  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))
  app.use('/api/v1', router)
  app.use((request, response) => response.status(404).send({
    code: 404,
    message: 'Not Found :('
  }))

  console.log(listEndpoints(app))

  return app
}

export default api
