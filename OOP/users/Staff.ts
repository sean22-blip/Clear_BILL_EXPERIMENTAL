// import { pool } from "../../backend/config/dbConnection.js";
// import { Request, Response } from 'express';
// import { InterfaceStaff } from "./IStaff.js";
// export abstract class Staff implements InterfaceStaff {
//     handleLogin(): void {
//         throw new Error("Method not implemented.");
//     }
//     handleLogout(): void {
//         throw new Error("Method not implemented.");
//     }
//     abstract can(action: string): boolean;
//      protected getUserInfoById = async (req: Request, res: Response) => {
//         try {
//             const { id } = req.params;
//             if (!id) {
//                 return res.status(404).json({ error: `id must be provided!` })
//             }
//             const [rows] = await pool.query("select * from staffs where staffId = ? ", [id]) as any[];//telling the typescript that it is just an array
//             if (rows.length === 0) {
//                 return res.status(404).json({ error: `cannot find ID: ${id}` })
//             }
//             res.status(200).json(rows[0])

//         } catch (error) {
//             console.log(`There is an error at staff getUserInfoById`);
//             res.status(500).json({ error: (error as Error).message })
//         }
//     }

//     protected getUserName = async (req: Request, res: Response) => {
//         try {
//             const { id } = req.params;
//             if (!id) {
//                 return res.status(404).json({ error: `id must be provided!` })
//             }
//             const [rows] = await pool.query("select name from staffs where staffId = ? ", [id]) as any[];
//             if (rows.length === 0) {
//                 return res.status(404).json({ error: `cannot find ID: ${id}` })
//             }
//             res.status(200).json(rows[0]);
//         } catch (error) {
//             console.log({ error: (error as Error).message })
//             res.status(500).json({ Error: (error as Error).message });
//         }
//     }
//     protected getUserEmail = async (req: Request, res: Response) => {
//         try {
//             const { id } = req.params;
//             if (!id) {
//                 return res.status(404).json({ error: `id must be provided!` })
//             }
//             const [rows] = await pool.query(`select email from staffs where staffId = ?`, [id]) as any[]
//             if (rows.length === 0) {
//                 return res.status(404).json({ error: `cannot find email with the ID: ${id}` });
//             }
//         } catch (error) {
//             console.log({ Error: (error as Error).message })
//             res.status(500).json({ Error: (error as Error).message })
//         }
//     }
//     protected getUserRole = async (req: Request, res: Response) => {
//         try {
//             const { id } = req.params;
//             if (!id) {
//                 return res.status(404).json({ error: `id must be provided!` })
//             }
//             const [rows] = await pool.query(`select role from staffs where staffId = ?`, [id]) as any[]
//             if (rows.length === 0) {
//                 return res.status(404).json({ error: `cannot find role with the ID: ${id}` });
//             }
//         } catch (error) {
//             console.log({ Error: (error as Error).message })
//             res.status(500).json({ Error: (error as Error).message })
//         }
//     }
//     setActive = async (req: Request, res: Response): Promise<boolean> => {
//         try {
            
//         } catch (error) {
            
//         }
//         return false;
//     }
// }
/*import { DataTypes, Sequelize, TIME } from "sequelize";
import dotenv from 'dotenv'
dotenv.config();



export const sequelize = new Sequelize(
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
}
)*/
import { Model } from "sequelize";
import { InterfaceStaff } from "./IStaff";
import { DataTypes, Sequelize, TIME } from "sequelize";
import dotenv from 'dotenv'
const sequelize = new Sequelize( process.env.MYSQL_DATABASE!,
    process.env.MYSQL_USER!,
    process.env.MYSQL_PASSWORD!,
    {
        host: process.env.MYSQL_HOST!,
        dialect: 'mysql'
    })
export abstract class Staff extends Model<InterfaceStaff> implements InterfaceStaff {
    constructor(
        private user_id:number,
        private name: string,
        private email: string,
        private password: string,
        private role: string
    ){
        super();
    }
    users = sequelize.define('user', {
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
    }
)
    handleLogin(): void {
       
    }
    handleLogout(): void {  
    }
    can(action: string): boolean {
        return false;
    }
}