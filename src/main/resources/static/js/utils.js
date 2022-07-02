export const clearElementOfChild = (el) => {
    while (el.firstChild) {
        el.removeChild(el.firstChild);
    }
}

export const getParamFromUrl = (param) => {
    return (new URL(document.location)).searchParams.get(param);
}