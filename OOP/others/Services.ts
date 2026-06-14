class Services{
    #service_id;
    #service_name;
    #description;
    #cost;
    constructor(service_id, service_name, description, cost){
        this.#service_id = service_id;
        this.#service_name = service_name;
        this.#description = description;
        this.#cost = cost;
    }
}