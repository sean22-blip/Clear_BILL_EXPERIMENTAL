class Staff {
    constructor(
        private userId: number,
        private name: string,
        private email: string,
        private password: string,
        private role: string
    ) { }
    protected getUserId(): number {
        return this.userId;
    }
    protected getUserName(): string {
        return this.name;
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