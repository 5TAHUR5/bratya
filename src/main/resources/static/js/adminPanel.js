import {cardBrickTemplateForAdmin} from "./templates.js";
import {makeElementVisible, makeElementInvisible} from "./catalog_utils.js";
import {clearElementOfChild} from "./utils.js";

const urlForBricks = "http://localhost:8080/getAllBricksDKJuISehg7dBSRfIJOUHJ5654cda"
const urlForBrick = "http://localhost:8080/getBricById_xrtjxftthr6uuxr6j64se5gezdryy5uy76"

let searchByNameLine = ""
let searchByIdLine = ""
let filter = "ID_DAWN"
const brickList = document.querySelector(".brickList")
const loaderWrapper = document.querySelector(".loaderWrapper")
const nothingFound = document.querySelector(".nothingFoundWrapper")
const searchByNameEl = document.querySelector("#search")
const searchByIdEl = document.querySelector("#searchByID")
const priceFilterEl = document.querySelector("#selectPriceFilter")
const idFilterEl = document.querySelector("#selectIdFilter")
idFilterEl.selectedIndex = 1
idFilterEl.value = "ID_DAWN"

const searchByNameFun = async (e) => {
    searchByNameLine = e.target.value
    if (searchByNameLine === "") {
        searchByIdLine = searchByIdEl.value
    } else {
        searchByIdLine = ""
    }
    await getBricks()
}

const searchByIdFun = async (e) => {
    searchByIdLine = e.target.value
    if (searchByIdLine === "") {
        searchByNameLine = searchByNameEl.value
    } else {
        searchByNameLine = ""
    }
    await getBricks()
}

const filterPriceEvent = async (e) => {
    idFilterEl.selectedIndex = 0
    idFilterEl.value = "NOT"
    filter = e.target.value
    await getBricks()
}

const filterIdEvent = async (e) => {
    priceFilterEl.selectedIndex = 0
    priceFilterEl.value = "NOT"
    filter = e.target.value
    await getBricks()
}

const getBricks = async () => {
    makeElementInvisible(nothingFound)
    makeElementVisible(loaderWrapper, "flex")
    clearElementOfChild(brickList)
    if (searchByIdLine === "") {
        const bricksFromServer = await (await fetch(urlForBricks + `?searchByName=${searchByNameLine}&searchById=${searchByIdLine}&filter=${filter}`, {
            method: "GET"
        })).json()
        makeElementInvisible(loaderWrapper)
        if (bricksFromServer.length === 0) {
            makeElementVisible(nothingFound, "block")
        } else {
            bricksFromServer.forEach((brick) => {
                brickList.appendChild(cardBrickTemplateForAdmin(brick))
            })
        }
    } else {
        const brickFromServer = await (await fetch(urlForBrick + `?id=${searchByIdLine}`, {
            method: "GET"
        })).json()
        makeElementInvisible(loaderWrapper)
        if (brickFromServer.id === null) {
            makeElementVisible(nothingFound, "block")
        } else {
            brickList.appendChild(cardBrickTemplateForAdmin(brickFromServer))
        }
    }


}


const bindEventListeners = () => {
    searchByNameEl.onchange = searchByNameFun
    searchByIdEl.onchange = searchByIdFun
    priceFilterEl.onchange = filterPriceEvent
    idFilterEl.onchange = filterIdEvent
}

const start = async () => {
    bindEventListeners()
    await getBricks()
}

await start()

