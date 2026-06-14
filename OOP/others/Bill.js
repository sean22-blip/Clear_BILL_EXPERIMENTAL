class Bill{
    bill_id;
    patient_id;
    bill_date;
    total_amount;
    status;
    constructor(bill_id, patient_id, bill_date, total_amount, status){
        this.bill_id = bill_date;
        this.patient_id = patient_id;
        this.bill_date = bill_date;
        this.total_amount = total_amount;
        this.status = status;
    }
}
class Bill_Detail{
    bill_Detail_id;
    bill_id;
    service_id;
    quantity;
    subtotal;
    constructor(bill_Detail_id, bill_id, service_id, quantity, subtotal){
        this.bill_Detail_id = bill_Detail_id;
        this.bill_id = bill_id;
        this.service_id = service_id;
        this.quantity = quantity;
        this.subtotal = subtotal;
    }
}
