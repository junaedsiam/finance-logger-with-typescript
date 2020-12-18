export interface Finance {
    person: string,
    details: string,
    amount: number,
    type: string,
    getDescription(): string,
    getAmount(): number
}