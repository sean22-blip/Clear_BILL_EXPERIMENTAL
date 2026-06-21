import { DataTypes } from "sequelize"
import sequelize from "../../db_connection"
const services = sequelize.define('service', {
    service_id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true,
        allowNull: false,
    },
    service_name:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    desciption:{
        type: DataTypes.TEXT,
        allowNull: false
    },
    cost:{
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    }
}, {
    freezeTableName: true
})