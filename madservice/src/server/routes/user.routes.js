import middleware from '../middleware/index.js'
import * as controller from '../controllers/user.controller.js'

export default function(app) {
  app.use((req, res, next) => {
    res.header(
      'Access-Control-Allow-Headers',
      'x-access-token, Origin, Content-Type, Accept'
    )
    next()
  })

  app.get('/api/all', controller.allAccess)

  app.get(
    '/api/user',
    [middleware.authJwt.verifyToken],
    controller.userBoard
  )

  app.get(
    '/api/seller',
    [middleware.authJwt.verifyToken, middleware.authJwt.isSeller],
    controller.sellerBoard
  )

  app.get(
    '/api/admin',
    [middleware.authJwt.verifyToken, middleware.authJwt.isAdmin],
    controller.adminBoard
  )

  app.get(
    '/api/technician',
    [middleware.authJwt.verifyToken, middleware.authJwt.isTechnician],
    controller.technicianBoard
  )

  app.get('/api/users/:id', middleware.authJwt.verifyToken, controller.getUser)
  app.put('/api/users/:id', middleware.authJwt.verifyToken, controller.updateUser)
}