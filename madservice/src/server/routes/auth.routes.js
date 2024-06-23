import middleware from '../middleware/index.js'
import * as controller from '../controllers/auth.controller.js'

export default function(app) {
  app.use((req, res, next) => {
    res.header(
      'Access-Control-Allow-Headers',
      'x-access-token, Origin, Content-Type, Accept'
    )
    next()
  })

  app.post(
    '/api/auth/signup',
      middleware.verifySignUp.checkDuplicateUsernameOrEmail,
      middleware.verifySignUp.checkRolesExisted,
    controller.signup
  )

  app.post('/api/auth/login', controller.signin)
}
