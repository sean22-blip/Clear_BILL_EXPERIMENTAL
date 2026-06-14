import { Bill } from "./Bill";
class Bill_Detail extends Bill {
    constructor(
        private bill_Detail_id: number,
        private service_id: number,
        private quantity: number,
        private subtotal: number, //the sum of all items + services provided

        bill_id: number,
        patient_id: number,
        bill_date: Date,
        total_amount: number,
        status: boolean

    ) { super(bill_id, patient_id, bill_date, total_amount, status) }
    protected getBillDetailId(id: number): number {
        return this.bill_Detail_id;
    }
    protected getBilId(id: number): number {
        return this.bill
    }
    protected getServiceId(id: number): number {
        return this.service_id;
    }
    protected getQuantity(): number {
        return this.quantity;
    }
    protected getSubTotal(): number {
        return this.subtotal;
    }
}