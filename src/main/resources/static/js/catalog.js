import {pageBtnTemplate, cardBrickTemplate} from "./templates.js";
import {makeElementVisible, makeElementInvisible} from "./catalog_utils.js";
import {clearElementOfChild} from "./utils.js";

const urlForBricks = "http://localhost:8080/publicRest/getBricksDKJuISehg7dBSRfIJOUHJ5654cda"
const urlForBricksCount = "http://localhost:8080/publicRest/getBricksCount_ftjx4eyes3vwr4tfxt4tTBWrftur5"

let limit = 2
let page = 1
let pageCount = 0
let searchLine = ""
let filterOfPrice = "DAWN"
const catalog = document.querySelector(".catalog")
const pagesNumbers = document.querySelector(".pagesWrapper")
const loaderWrapper = document.querySelector(".loaderWrapper")
const arrowLeft = document.querySelector("#arrowLeft")
const arrowRight = document.querySelector("#arrowRight")
const searchEl = document.querySelector("#search")
const priceFilterEl = document.querySelector("#selectPriceFilter")


const searchFun = async (e) => {
    searchLine = e.target.value
    await updateBricks()
}

const filterPriceEvent = async (e) => {
    filterOfPrice = e.target.value
    await updateBricks()
}

const setPageRight = async () => {
    if (parseInt(page) !== parseInt(pageCount)) {
        await setPage(parseInt(page) + 1)
    }
}
const setPageLeft = async () => {
    if (parseInt(page) !== 1 ) {
        await setPage(parseInt(page) - 1)
    }
}

const updateBricks = async () => {
    await setPage(1)
    await getBricksCount()
}

const setPage = async (number) => {
    pagesNumbers.children.item(page - 1).classList.remove("enabled")
    page = number;
    pagesNumbers.children.item(page - 1).classList.add("enabled")
    parseInt(page) === parseInt(pageCount) ? arrowRight.classList.add("disabled") : arrowRight.classList.remove("disabled");
    parseInt(page) === 1 ? arrowLeft.classList.add("disabled") : arrowLeft.classList.remove("disabled");
    await getBricks()
}

const getBricks = async () => {
    makeElementVisible(loaderWrapper)
    clearElementOfChild(catalog)
    const bricksFromServer = await (await fetch(urlForBricks + `?limit=${limit}&page=${page}&search=${searchLine}&filter_price=${filterOfPrice}`, {
        method: "GET"
    })).json()
    makeElementInvisible(loaderWrapper)
    bricksFromServer.forEach((brick) => {
        catalog.appendChild(cardBrickTemplate(brick))
    })
}

const getBricksCount = async () => {
    clearElementOfChild(pagesNumbers)
    const bricksCount = await (await fetch(urlForBricksCount + `?search=${searchLine}`, {
        method: "GET"
    })).json()
    pageCount = bricksCount / limit
    if (pageCount < 10) {
        for (let i = 1; i < pageCount + 1; i++) {
            pagesNumbers.append(pageBtnTemplate(i))
            if (i === 1) {
                pagesNumbers.lastElementChild.classList.add("enabled")
            }
             document.querySelector("#pageBtn" + i.toString()).onclick = async function fgh() {
                await setPage(i)
            }
        }
    }
}

const bindEventListeners = () => {
    arrowRight.onclick = setPageRight
    arrowLeft.onclick = setPageLeft
    searchEl.onchange = searchFun
    priceFilterEl.onchange = filterPriceEvent
}

const start = async () => {
    bindEventListeners()
    await getBricksCount()
    await getBricks()
}

await start()

