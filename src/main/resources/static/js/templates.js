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
                        <button onclick="document.location.href = '/setBrick?id=${brick.id}'" class="editBtn">
                            <img src="/static/assets/img/handyman.svg" alt="">
                            Изменить
                        </button>
                        <button onclick="confirm('Удалить кирпич с ID ${brick.id}?') ? document.location.href = '/deleteBrickthj6u4se5y43sea4yr5u?id=${brick.id}' : this.blur()" class="deleteBtn" tabindex="1">
                            <img src="/static/assets/img/delete.svg" alt="">
                            Удалить
                        </button>
                </div>
            </div>`
        , "text/html").body.querySelector(".card")
}


export const cardBrickTemplateForSetBrick = (brick) => {
    return new DOMParser().parseFromString(`
            <div class="card">
                <label>
                    <span>ID: </span>
                    <input class="inputs" type="number" name="" value="${brick.id}" disabled>
                </label>
                <input type="hidden" name="id" value="${brick.id}">
                <label>
                    <span>Название кирпича: </span>
                    <input class="inputs" type="text" value="${brick.name}" name="name" placeholder="">
                </label>
                <div class="dimensionWrapper">
                    <span>Размеры:</span><br>
                    <label>
                        <span>Высота: <input type="number" name="height" value="${brick.dimension.split("см", 3)[0].replace(/\s/g, '')}"> см</span>
                        <img src="/static/assets/img/height.png" alt="">
                    </label>
                    <label>
                        <span>Ширина: <input type="number" name="width" value="${brick.dimension.split("см", 3)[1].replace(/\s/g, '')}"> см</span>
                        <img src="/static/assets/img/width.png" alt="">
                    </label>
                    <label>
                        <span>Длина: <input type="number" name="longB" value="${brick.dimension.split("см", 3)[2].replace(/\s/g, '')}"> см</span>
                        <img src="/static/assets/img/long.png" alt="">
                    </label>
                </div>
                <label>
                    <span>Цена (P): </span>
                    <input class="inputs" type="number" name="price" placeholder="" value="${brick.price}">
                </label>
                <div class="imgWrapper">
                    <img src="/img/${brick.img}" alt="">
                    <input id="fileInput" class="fileInput" type="file" name="file" placeholder="File">
                </div>
                <div class="btnWrapper">
                    <button type="submit"><span>изменить</span></button>
                </div>
            </div>
    `
        , "text/html").body.querySelector(".card")
}