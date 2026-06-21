import sequelize from "../../db_connection";
import { DataTypes } from "sequelize";

const address = sequelize.define('address',
    {
        address_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
        },
        street:{
            type: DataTypes.STRING,
            allowNull: false
        },
        state:{
            type: DataTypes.STRING,
            allowNull:false
        },
        city:{
            type: DataTypes.STRING,
            allowNull: false
        },
        postal_code:{
            type:DataTypes.INTEGER,
            allowNull: false
        },
        country:{
            type:DataTypes.STRING,
            allowNull:false
        }
    },{
        freezeTableName: true
    }
)