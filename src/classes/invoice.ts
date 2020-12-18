import { Finance } from "./../interfaces/finance"

export class Invoice implements Finance {
    constructor(
        readonly person: string,
        readonly details: string,
        readonly amount: number,
        readonly type: string
    ) { }
    getDescription() {
        return `An invoice has been created to ${this.person}, ${this.details}`
    }
    getAmount() {
        return this.amount;
    }
}
