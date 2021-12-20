
import { UserService, RoleService } from '../services'

const UserController = ({ router, tryCatch }) => {
  const userService = UserService()
  const roleService = RoleService()

  router.get('/user', tryCatch((request, response) => {
    const { id } = request.query
    const { name } = userService.getUser({ id })
    const roles = roleService.getRole({ id })
    console.log(name, roles)

    throw new Error()
  }))
}

export default UserController
