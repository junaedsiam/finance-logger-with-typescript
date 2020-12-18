export function generateHTMLElement(tagName: string, classes?: Array<string>, innerText?: string) {
    const element = document.createElement(tagName);
    if (classes && classes.length) {
        attachClassesToElement(element, classes);
    }
    if (innerText) {
        element.innerText = innerText;
    }
    return element;
}
export function attachClassesToElement(element: HTMLElement, classes: Array<string>): void {
    classes.forEach(clas => {
        element.classList.add(clas)
    });
}