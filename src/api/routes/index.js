import * as controllers from '../controllers'

const Routes = ({ router, tryCatch }) => {
  let controller

  for (controller in controllers) {
    controllers[controller]({ router, tryCatch })
  }

  return router
}

export default Routes
