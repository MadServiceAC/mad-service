import middleware from "../middleware/index.js"
import * as controller from "../controllers/products.controller.js"
import upload from "../middleware/upload.js"

export default function(app) {
    app.use((req, res, next) => {
        res.header(
          'Access-Control-Allow-Headers',
          'x-access-token, Origin, Content-Type, Accept'
        )
        next()
    })

    app.get('/api/seller/products', [middleware.authJwt.verifyToken], controller.getAllProducts)
    app.get('/api/seller/products/:id', [middleware.authJwt.verifyToken], controller.getProduct)
    app.post('/api/seller/products', [middleware.authJwt.verifyToken, middleware.authJwt.isSeller], controller.createProduct)
    app.put('/api/seller/products/:id', [middleware.authJwt.verifyToken, middleware.authJwt.isSeller], controller.updateProduct)
    app.patch('/api/seller/products/stock/:id', [middleware.authJwt.verifyToken, middleware.authJwt.isSeller], controller.addProductStock)
    app.delete('/api/seller/products/:id', [middleware.authJwt.verifyToken, middleware.authJwt.isSeller], controller.deleteProduct)

    app.post('/api/products/:id/upload', [middleware.authJwt.verifyToken, middleware.authJwt.isSeller], controller.uploadImage)
}