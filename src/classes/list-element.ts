import { Finance } from "./../interfaces/finance";
import { generateHTMLElement } from "./../utils/ui-helper";

export class ListElement {
    constructor(
        readonly parent: HTMLElement,
        readonly finance: Finance,
    ) { }
    generate(): void {
        const listClasses = ["alert", "border", "border-light", "p-4", "mb-4"];
        const headerClasses = ["text-uppercase"];
        if (this.finance.type === "invoice") {
            listClasses.push("alert-primary");
            headerClasses.push("text-primary");
        } else {
            listClasses.push("alert-secondary");
            headerClasses.push("text-success");
        }

        const li = generateHTMLElement("li", listClasses)
        const h4 = generateHTMLElement("h4", headerClasses);
        const span = generateHTMLElement("span", ["text-secondary", "ms-2"]);
        const p = generateHTMLElement("p", ["m-0", "lead"]);
        // Header
        span.innerText = "/ " + this.finance.amount.toString();
        h4.append(this.finance.type);
        h4.append(span);
        //description
        p.innerText = this.finance.getDescription();
        li.append(h4);
        li.append(p);
        this.parent.append(li);
    }
}