import * as controllers from '../controllers'

const Routes = ({ router, tryCatch, validator }) => {
  let controller

  for (controller in controllers) {
    controllers[controller]({ router, tryCatch, validator })
  }

  return router
}

export default Routes
