import { DataTypes, Sequelize, TIME } from "sequelize";
import dotenv from 'dotenv'
dotenv.config();



const sequelize = new Sequelize(
    process.env.MYSQL_DATABASE!,
    process.env.MYSQL_USER!,
    process.env.MYSQL_PASSWORD!,
    {
        host: process.env.MYSQL_HOST!,
        dialect: 'mysql'
    }
)
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
        allowNull: true
    }
})
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
const users = sequelize.define('user', {
    user_id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    name:{
        type:DataTypes.STRING,
        allowNull: false
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
    },
    role:{
        type: DataTypes.ENUM('Admin', 'Cashier', 'Receptionist', 'Patient'),
        allowNull: false
    }
})