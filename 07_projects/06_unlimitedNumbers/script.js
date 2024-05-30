// generate a randome color

const randomColor = function () {
    const hax = "0123456789ABCDEF"
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += hax[Math.floor(Math.random() * 16)]
    }
    return color;
}
let intervalId;
function startChangingColor() {

    if (!intervalId) {
        intervalId = setInterval(() => {
            document.body.style.backgroundColor = randomColor()
        }, 100)
    }
}
function stopChangingColor() {
    clearInterval(intervalId)
    intervalId = null
}

document.querySelector('#start').addEventListener('click', startChangingColor)
document.querySelector('#stop').addEventListener('click', stopChangingColor)

