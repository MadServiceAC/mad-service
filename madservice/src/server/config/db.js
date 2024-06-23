import dotenv from "dotenv"

dotenv.config()

export default {
    HOST: process.env.HOST,
    USER: process.env.USER,
    PASSWORD: process.env.PASS,
    DB: process.env.DATABASE,
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}