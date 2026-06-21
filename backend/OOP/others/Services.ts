import sequelize from "../../../frontend/db_connection"
import { DataTypes } from "sequelize"
const services = sequelize.define('service', {
    service_id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement:true
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
})