import express, { urlencoded } from "express"
import ViteExpress from "vite-express"
import cors from "cors"
import db from "./models/index.js"
import authRoutes from "./routes/auth.routes.js"
import userRoutes from "./routes/user.routes.js"
import productRoutes from "./routes/product.routes.js"

const app = express()
app.use(express.json())
app.use(cors())
app.use(urlencoded({extended: true}))

const Role = db.role

db.sequelize.sync()
// db.sequelize.sync({force: true}).then(() => {
//   console.log('Drop and Resync Database with { force: true }')
//   initial()
// })

// app.get('/', (req,res) => {
//   res.json({message: "Selamat datang"})
// })

authRoutes(app)
userRoutes(app)
productRoutes(app)

ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000..."),
)

function initial() {
  Role.create({
    id: 1,
    name: "user"
  })
 
  Role.create({
    id: 2,
    name: "seller"
  })
 
  Role.create({
    id: 3,
    name: "admin"
  })

  Role.create({
    id: 4,
    name: "technician"
  })
}