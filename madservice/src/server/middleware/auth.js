import jwt from 'jsonwebtoken'
import config from '../config/auth.js'
import db from '../models/index.js'

const {user: User} = db

const verifyToken = (req, res, next) => {
    let token = req.headers['x-access-token']
  
    if (!token) {
      return res.status(403).send({
        message: 'Anda tidak memiliki akses!'
      })
    }
  
    jwt.verify(token, config.secret, (err, decoded) => {
      if (err) {
        return res.status(401).send({
          message: 'Akses tidak cukup!'
        })
      }
      req.userId = decoded.id
      next()
    })
  }
  
  const isAdmin = (req, res, next) => {
    User.findByPk(req.userId).then(user => {
      user.getRoles().then(roles => {
        for (let i = 0; i < roles.length ;i++) {
          if (roles[i].name === 'admin') {
            next()
            return
          }
        }
  
        res.status(403).send({
          message: 'Anda bukan admin!'
        })
      })
    })
  }
  
  const isSeller = (req, res, next) => {
    User.findByPk(req.userId).then(user => {
      user.getRoles().then(roles => {
        for (let i = 0; i < roles.length ;i++) {
          if (roles[i].name === 'seller') {
            next()
            return
          }
        }
  
        res.status(403).send({
          message: 'Anda bukan seller!'
        })
      })
    })
  }
  
  const isTechnician = (req, res, next) => {
    User.findByPk(req.userId).then(user => {
      user.getRoles().then(roles => {
        for (let i = 0; i < roles.length ;i++) {
          if (roles[i].name === 'technician') {
            next()
            return
          }
        }
  
        res.status(403).send({
          message: 'Anda bukan teknisi!'
        })
      })
    })
  }
  
  const authJwt = {
    verifyToken,
    isAdmin,
    isSeller,
    isTechnician
  }
  
  export default authJwt