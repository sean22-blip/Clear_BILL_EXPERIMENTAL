export class Bill {
    constructor(
        private bill_id: number,
        private patient_id: number,
        private bill_date: Date,
        private total_amount: number,
        private status: boolean
    ) { }
    protected getBillId(): number {
        return this.bill_id;
    }
    protected getPatientId(): number {
        return this.patient_id;
    }
    protected getBillDateById(id: number): Date {
        return this.bill_date;
    }
    protected getTotalAmount(): number {
        return this.total_amount;
    }
    protected getStatus(): boolean {
        return this.status;
    }
}
