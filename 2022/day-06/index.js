const getRandomNumberOfTacos = () => {
    const numTacos = Math.floor(Math.random() * 11);
    const tacosArr = new Array(numTacos).fill('🌮');

    return tacosArr;
}

const putTacosOnTray = () => {
    return getRandomNumberOfTacos().map(function (taco) {
        return `<div class="taco">${taco}</div>`
    }).join('');
}

document.getElementById('tray').innerHTML = putTacosOnTray();
