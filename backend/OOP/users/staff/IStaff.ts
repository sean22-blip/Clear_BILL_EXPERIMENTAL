// const Action = ['create', 'read', 'update', 'delete']
export interface InterfaceStaff{
    handleLogin(name: string, password: string): boolean;
    handleLogout(): boolean;
    can(action:string):boolean;
}

