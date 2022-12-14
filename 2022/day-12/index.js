const dinnerFoods = ['🍝','🍔','🌮'];

const getMenu = document.getElementById('menu');

const switchToDinnerMenu = (dinnerMenu, section) => {
    const dinnerMenuHTML = dinnerMenu.map(food => `<div class="food">${food}</div>`);
    
    section.innerHTML = '';
    dinnerMenuHTML.forEach(div => section.innerHTML += div);
}

switchToDinnerMenu(dinnerFoods, getMenu);
