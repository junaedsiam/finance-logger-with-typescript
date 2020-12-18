import { Finance } from "./interfaces/finance";
import { Invoice } from "./classes/invoice";
import { Payment } from "./classes/payment";
import { ListElement } from "./classes/list-element"
/**
 * DOM
 */
const financeForm = document.getElementById("finance-form") as HTMLFormElement;
const financeList = document.getElementById("finance-list") as HTMLElement;
/**
 * EVENT LISTENER
 */
financeForm.addEventListener("submit", handleFinanceForSubmission);

function handleFinanceForSubmission(e: Event): void {
    e.preventDefault();
    let financialEntity: Finance;
    const type: string = financeForm.value;
    const person: string = financeForm.person.value;
    const details: string = financeForm.details.value;
    const amount: number = financeForm.amount.valueAsNumber;

    if (financeForm.type.value === "invoice") {
        // DO something
        financialEntity = new Invoice(person, details, amount, type);
    } else {
        financialEntity = new Payment(person, details, amount, type);
    }
    populateUi(financialEntity, financeList);
    financeForm.reset();
}

function populateUi(entity: Finance, list: HTMLElement): void {
    const li = new ListElement(list, entity);
    li.generate();
}

