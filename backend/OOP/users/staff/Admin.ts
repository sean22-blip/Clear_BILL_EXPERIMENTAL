// import { Staff } from "./Staff";
import { Staff } from "./Staff";
class Admin extends Staff {
    handleLogin(oldPassword: string, newPassword: string): boolean{
        return false;
    }
    handleLogout(): boolean {
        return false;
    }
    can(action: string): boolean {
        return false;
    }
}