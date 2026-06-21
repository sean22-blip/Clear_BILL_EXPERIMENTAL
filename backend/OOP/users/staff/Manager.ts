import { Staff } from "./Staff";
class Manager extends Staff{
    handleLogin(): void {
        
    }
    handleLogout(): void {
        
    }
    can(action: string): boolean {
        return false;
    }
}