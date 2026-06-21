// const Action = ['create', 'read', 'update', 'delete']
export interface InterfaceStaff{
    handleLogin(): void;
    handleLogout(): void;
    can(action:string):boolean;
}

