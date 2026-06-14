class Receptionist{
    #userId;
    #name;
    #email;
    #password;
    #role;
    constructor(userId, name, email, password, role){
        this.#userId = userId;
        this.#name = name;
        this.#email = email;
        this.#password = password;
        this.#role = role;
    }
}