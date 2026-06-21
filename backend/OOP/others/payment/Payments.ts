import { DataTypes, TIME } from "sequelize"
import sequelize from "../../../db_connection"
const payments = sequelize.define('payment', {
    payment_id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    bill_id:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    amount:{
        type: DataTypes.DECIMAL(10, 2),
        allowNull:false
    },
    payment_method:{
        type: DataTypes.ENUM('Cash','Card','Bank Transfer'),
        allowNull: true
    },
    payment_date:{
        type:DataTypes.TIME, defaultValue: TIME,
        allowNull: false
    }
}
, {
    freezeTableName: true
})