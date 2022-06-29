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