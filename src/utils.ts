export const safeSelect = <T extends Element = HTMLElement>(el: ParentNode, selector: string): T => {
    const found = el.querySelector(selector);

    if (!found) {
        throw new Error(`element missing: ${selector} on ${el.nodeName}`);
    }

    return found as T;
};

const dateFormatter = Intl.DateTimeFormat('ru');

export const formatDate = (date: string) => {
    console.log(date);
    return dateFormatter.format(new Date(date));
};
