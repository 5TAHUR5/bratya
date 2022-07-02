import {cardBrickTemplateForSetBrick} from "./templates.js";
import {getParamFromUrl} from "./utils.js";
import {makeElementVisible} from "./catalog_utils.js";


const id = getParamFromUrl("id")
const urlForBrick = "http://localhost:8080/getBricById_xrtjxftthr6uuxr6j64se5gezdryy5uy76"
const form = document.querySelector("form")
const notBrick = document.querySelector(".notBrickWrapper")


const getBricks = async () => {
    const brickFromServer = await (await fetch(urlForBrick + `?id=${id}`, {
        method: "GET"
    })).json()
    form.appendChild(cardBrickTemplateForSetBrick(brickFromServer))
}

const setImg = (ev) => {
    const file = ev.target.files[0]
    if (file) {
        document.querySelector(".imgWrapper").querySelector("img").src = URL.createObjectURL(file)
    }
}

const bindEventListeners = () => {
    document.querySelector("#fileInput").onchange = setImg
}

const start = async () => {
    if (id !== null) {
        await getBricks()
        bindEventListeners()
    } else {
        makeElementVisible(notBrick, "block")
    }
}

await start()