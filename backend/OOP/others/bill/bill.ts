import sequelize from "../../../../frontend/db_connection"
import { DataTypes } from "sequelize"
  const bills = sequelize.define('bill', {
    bill_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        
    },
    patient_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        
    },
    bill_date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    total_amount: {
        type: DataTypes.DECIMAL(10, 2), defaultValue: 0.00,
        allowNull: false
    },
    status: {
        type: DataTypes.ENUM('Paid', 'Unpad'), defaultValue: 'Unpaid',
        allowNull: false
    }
})