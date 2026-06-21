import sequelize from "../../../db_connection"
import { DataTypes } from "sequelize"
const bill_details = sequelize.define('bill_detail', {
    detail_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        
    },
    bill_id:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    service_id:{
        type:DataTypes.INTEGER,
        allowNull: false
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    subtotal: {
        type: DataTypes.DECIMAL(10,2), defaultValue: 0.00,
        allowNull: false
    }
})