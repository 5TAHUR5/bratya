export const makeElementInvisible = (el) => {
    el.style = "display: none"
}

export const makeElementVisible = (el, display) => {
    el.style = "display: " + display
}