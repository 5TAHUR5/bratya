export const cardBrickTemplate = (brick) => {
    return new DOMParser().parseFromString(`
        <div class="card">
            <div class="icon">
                <img src="/img/${brick.img}" alt="">
            </div>
            <span class="brickName">
                    ${brick.name}
                </span>
            <span class="brickSize">
                <span class="sizeName">
                    Размер:
                </span>
                ${brick.dimension}
            </span> 
            <span class="priceName">
                    Цена: <span class="price">${brick.price}</span>
            </span>
        </div>
    `, "text/html").body.querySelector(".card")
}

export const pageBtnTemplate = (index) => {
    return new DOMParser().parseFromString(`
        <div class="paginationBtn" id="pageBtn${index}" >
            <a>${index}</a>
        </div>
    `, "text/html").body.querySelector(".paginationBtn")
}

export const cardBrickTemplateForAdmin = (brick) => {
    return new DOMParser().parseFromString(`<div class="card">
                <div class="imgWrapper">
                    <img src="/img/${brick.img}" alt="">
                </div>
                <div class="properties">
                    <div class="idWrapper"><span>ID ${brick.id}</span></div>
                    <div class="numProperty">
                        <div class="priceWrapper">Price: <span>${brick.price}</span></div>
                        <div class="nameWrapper">Name: <span>${brick.name}</span></div>
                        <div class="dimensionWrapper">Dimension: <span>${brick.dimension}</span></div>
                    </div>
                </div>
                <div class="redactorBtnGroup">
                        <div class="editBtn">
                            <img src="/static/assets/img/handyman.svg" alt="">
                            Изменить
                        </div>
                        <div class="deleteBtn">
                            <img src="/static/assets/img/delete.svg" alt="">
                            Удалить
                        </div>
                </div>
            </div>`
        , "text/html").body.querySelector(".card")
}


export const cardBrickTemplateForSetBrick = (brick) => {
    return new DOMParser().parseFromString(`
            <div class="card">
                <label>
                    <span>ID: </span>
                    <input class="inputs" type="text" name="name" value="${brick.id}" disabled>
                </label>
                <label>
                    <span>Название кирпича: </span>
                    <input class="inputs" type="text" value="${brick.name}" name="name" placeholder="">
                </label>
                <div class="dimensionWrapper">
                    <span>Размеры:</span><br>
                    <label>
                        <span>Высота: <input type="number" name="height"> см</span>
                        <img src="/static/assets/img/height.png" alt="">
                    </label>
                    <label>
                        <span>Ширина: <input type="number" name="width"> см</span>
                        <img src="/static/assets/img/width.png" alt="">
                    </label>
                    <label>
                        <span>Длина: <input type="number" name="longB"> см</span>
                        <img src="/static/assets/img/long.png" alt="">
                    </label>
                </div>
                <label>
                    <span>Цена (P): </span>
                    <input class="inputs" type="number" name="price" placeholder="">
                </label>
                <div class="imgWrapper">
                    <img src="/static/assets/img/filter.svg" alt="">
                    <input class="fileInput" type="file" name="file" placeholder="File">
                </div>
                <div class="btnWrapper">
                    <button type="submit"><span>изменить</span></button>
                </div>
            </div>
    `
        , "text/html").body.querySelector(".card")
}