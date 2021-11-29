import { RoleModel } from '../models'

const RoleService = () => {
  const roleModel = RoleModel()

  const getRole = (query) => roleModel.getRoles(query)

  return {
    getRole
  }
}

export default RoleService
