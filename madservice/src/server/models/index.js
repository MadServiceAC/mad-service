import { Sequelize } from 'sequelize'
import config from '../config/db.js'

const sequelize = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD,
  {
    host: config.HOST,
    dialect: config.dialect,
    pool: {
      max: config.pool.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle
    }
  }
)

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

import UserModel from './user.js'
import RoleModel from './roles.js'
import Products from './products.js'
import Features from './features.js'

db.user = UserModel(sequelize, Sequelize)
db.role = RoleModel(sequelize, Sequelize)
db.products = Products(sequelize, Sequelize)
db.features = Features(sequelize, Sequelize)


db.role.belongsToMany(db.user, {
  through: "user_roles"
})
db.user.belongsToMany(db.role, {
  through: "user_roles"
})
db.ROLES = ["user", "admin", "seller", "technician"]


db.products.hasOne(db.features, { foreignKey: 'sku', as: 'product_feature' })
db.features.belongsTo(db.products, { foreignKey: 'sku' })

export default db