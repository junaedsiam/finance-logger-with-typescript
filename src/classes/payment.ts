import { Finance } from "./../interfaces/finance";

export class Payment implements Finance {
    constructor(
        readonly person: string,
        readonly details: string,
        readonly amount: number,
        readonly type: string
    ) { }
    getDescription() {
        return `A payment has been made by ${this.person}, ${this.details ? this.details : ""}`
    }
    getAmount() {
        return this.amount;
    }
}