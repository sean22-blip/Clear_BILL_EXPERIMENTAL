import { Sequelize, DataTypes, EmptyResultError } from "sequelize";
import dotenv from 'dotenv';
dotenv.config();
const sequelize = new Sequelize(
    process.env.MYSQL_DATABASE,
    process.env.MYSQL_USER,
    process.env.MYSQL_PASSWORD,
    {
        host: process.env.MYSQL_HOST,
        dialect: 'mysql',
    }
);

const User = sequelize.define(`User`, {
    user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING
}, {
    timestamps: false,
    tableName: 'users'
})
const allUser = await User.findAll({raw: true});
console.log(allUser);