import { Request, Response } from "express";
import { Staff } from "./Staff";
class Cashier extends Staff {
handleLogin(): void {
    
}
handleLogout(): void {
    
}
can(action: string): boolean {
    return false;
}

}
