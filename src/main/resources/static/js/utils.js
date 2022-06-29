export const clearElementOfChild = (el) => {
    while (el.firstChild) {
        el.removeChild(el.firstChild);
    }
}

