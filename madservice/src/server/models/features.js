import { DataTypes } from "sequelize"

export default (sequelize) => {
    const Features = sequelize.define("product_feature", {
        sku: {
            type: DataTypes.STRING,
            primaryKey: true,
            references: {
                model: 'products',
                key: 'sku'
            }
        },
        color: {
            type: DataTypes.STRING
        },
        power_cons: {
            type: DataTypes.INTEGER
        },
        dimen: {
            type: DataTypes.STRING
        },
        weight: {
            type: DataTypes.INTEGER
        },
        warranty: {
            type: DataTypes.STRING
        },
        cooling_cap: {
            type: DataTypes.INTEGER
        },
        ref_type: {
            type: DataTypes.STRING
        },
        pipe_size: {
            type: DataTypes.STRING
        },
        outdoor_dimen: {
            type: DataTypes.STRING
        },
        outdoor_weight: {
            type: DataTypes.INTEGER
        },
        madein: {
            type: DataTypes.STRING
        }
    })
    
    return Features
}