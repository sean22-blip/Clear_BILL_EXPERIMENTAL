import { DataTypes } from "sequelize"
import sequelize from "../../../../frontend/db_connection"
const patients = sequelize.define('patient', {
    patient_id :{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    gender:{
        type: DataTypes.ENUM('Male', 'Female', 'Other'),
        allowNull: true
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: true
    },
    address:{
        type: DataTypes.TEXT,
        allowNull: true
    }
})