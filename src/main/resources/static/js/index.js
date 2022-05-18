const bgs = [document.querySelector('#main-bg-1'),
    document.querySelector('#main-bg-2'),
    document.querySelector('#main-bg-3'),
    document.querySelector('#main-bg-4'),
    document.querySelector('#main-bg-5'),
    document.querySelector('#main-bg-6')
]
let houseNum = 1


setInterval(() => {

    if (houseNum === 6) {
        houseNum = 1
        bgs[0].style.opacity = "0.1"
        bgs[5].style.opacity = "0.9"
        bgs[0].style.opacity = "0.2"
        bgs[5].style.opacity = "0.8"
        bgs[0].style.opacity = "0.3"
        bgs[5].style.opacity = "0.7"
        bgs[0].style.opacity = "0.4"
        bgs[5].style.opacity = "0.6"
        bgs[0].style.opacity = "0.5"
        bgs[5].style.opacity = "0.5"
        bgs[0].style.opacity = "0.6"
        bgs[5].style.opacity = "0.4"
        bgs[0].style.opacity = "0.7"
        bgs[5].style.opacity = "0.3"
        bgs[0].style.opacity = "0.8"
        bgs[5].style.opacity = "0.2"
        bgs[0].style.opacity = "0.9"
        bgs[5].style.opacity = "0.1"
        bgs[0].style.opacity = "1"
        bgs[5].style.opacity = "0"

    } else {
        bgs[houseNum].style.opacity = "0.1"
        bgs[houseNum - 1].style.opacity = "0.9"
        bgs[houseNum].style.opacity = "0.2"
        bgs[houseNum - 1].style.opacity = "0.8"
        bgs[houseNum].style.opacity = "0.3"
        bgs[houseNum - 1].style.opacity = "0.7"
        bgs[houseNum].style.opacity = "0.4"
        bgs[houseNum - 1].style.opacity = "0.6"
        bgs[houseNum].style.opacity = "0.5"
        bgs[houseNum - 1].style.opacity = "0.5"
        bgs[houseNum].style.opacity = "0.6"
        bgs[houseNum - 1].style.opacity = "0.4"
        bgs[houseNum].style.opacity = "0.7"
        bgs[houseNum - 1].style.opacity = "0.3"
        bgs[houseNum].style.opacity = "0.8"
        bgs[houseNum - 1].style.opacity = "0.2"
        bgs[houseNum].style.opacity = "0.9"
        bgs[houseNum - 1].style.opacity = "0.1"
        bgs[houseNum].style.opacity = "1"
        bgs[houseNum - 1].style.opacity = "0"

        houseNum += 1
    }


}, 1000 * 5)