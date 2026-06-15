import { pool } from "../../system/dbConnection.js";
import { Request, Response } from 'express'

class Staff implements InterfaceStaff{
    handleLogin(): void {
        throw new Error("Method not implemented.");
    }
    handleSignout(): void {
        throw new Error("Method not implemented.");
    }

    protected getUserInfoById = async (req: Request, res:Response) =>{
        try {
            const{id} = req.params;
            if(!id){
                return res.status(404).json({error: `id must be provided!`})
            }
            const[rows] = await pool.query("select * from staffs where id = ? ", [id]) as any[];//telling the typescript that it is just an array
            if(rows.length === 0){
                return res.status(404).json({error: `cannot find ID: ${id}`})
            }
            res.status(200).json(rows[0])

        } catch (error) {
            console.log(`There is an error at staff getUserInfoById`);
            res.status(500).json({error: (error as Error).message})
        }
    }

    protected getUserName = async (req: Request, res: Response) => {
        try {
            const{id} = req.params;
            if(!id){
                return res.status(404).json({error: `id must be provided!`})
            }
            const [rows] = await pool.query("select name from staffs where id = ? " , [id]) as any[];
            if(rows.length === 0) {
                return res.status(404).json({error: `cannot find ID: ${id}`})
            }
            res.status(200).json(rows[0]);
        } catch (error) {
            console.log({error: (error as Error).message})
            res.status(500).json({Error: (error as Error).message});
        }
    }
    protected setUserName(value: string): void {
        this.name = value;
    }

    protected getUserEmail(): string {
        return this.email;
    }
    private setUserEmail(value: string): void {
        this.email = value;
    }

    private getUserPassword(): string {
        return this.password;
    }
    private setUserPassword(value: string): void {
        this.password = value;
    }

    protected getUserRole(): string {
        return this.role;
    }
    private setUserRole(value: string): void {
        this.role = value;
    }
}