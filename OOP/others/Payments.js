class Payment{
    payment_id;
    bill_id;
    amount;
    payment_method;
    payment_date;
    constructor(payment_id, bill_id, amount, payment_method, payment_date){
        this.payment_id = payment_id;
        this.bill_id = bill_id;
        this.amount = amount;
        this.payment_method = payment_method;
        this.payment_date = payment_date;
    }
}