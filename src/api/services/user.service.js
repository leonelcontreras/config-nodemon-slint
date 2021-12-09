import { UserModel } from '../models'

const UserService = () => {
  const userModel = UserModel()
  const getUser = (query) => userModel.getUser(query)[0]

  return {
    getUser
  }
}

export default UserService
