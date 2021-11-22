import { UserService, RoleService } from '../services'

const UserController = ({ router }) => {
  const userService = UserService()
  const roleService = RoleService()

  router.get('/user', (request, response) => {
    const { id } = request.query
    const { name } = userService.getUser({ id })
    const roles = roleService.getRole({ id })

    return response.send({
      name,
      roles
    })
  })
}

export default UserController
