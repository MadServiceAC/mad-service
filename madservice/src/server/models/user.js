import { DataTypes } from 'sequelize'

export default (sequelize) => {
  const User = sequelize.define("users", {
    username: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING
    },
    password: {
      type: DataTypes.STRING
    },
    fullname: {
      type: DataTypes.STRING
    },
    dob: {
        type: DataTypes.DATEONLY
    },
    phone: {
        type: DataTypes.STRING
    },
    gender: {
        type: DataTypes.ENUM("L", "P")
    },
    mastery: {
        type: DataTypes.STRING
    },
    skill: {
        type: DataTypes.STRING
    },
    address: {
        type: DataTypes.STRING
    }
  })

  return User
}
