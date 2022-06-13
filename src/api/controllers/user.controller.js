
import { userValidator } from '../validators'

const UserController = ({ router, tryCatch, validator }) => {
  router.post('/user', userValidator, validator, tryCatch((request, response) => {
    const { name, email } = request.body

    return response.send({
      name,
      email
    })
  }))
}

export default UserController
