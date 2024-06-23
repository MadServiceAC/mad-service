import {DataTypes} from 'sequelize'

export default(sequelize) => {
    const Products = sequelize.define("products", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        sku: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        image_path: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty:true
            }
        },
        name:{
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                notEmpty: true,
                len: [3, 100]
            }
        },
        description: {
            type: DataTypes.STRING
        },
        category: {
            type: DataTypes.STRING
        },
        brand: {
            type: DataTypes.STRING
        },
        price:{
            type: DataTypes.INTEGER,
            allowNull: false,
            validate:{
                notEmpty: true
            }
        },
        stock:{
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        userId:{
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'users',
                key: 'id'
            }
        }
    },{
        freezeTableName: true
    })

    return Products
}