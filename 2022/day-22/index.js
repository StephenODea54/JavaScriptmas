const getReadyTables = () => {
    const readyTables = [];
    for (let i = 0; i < 2; i++) {
        readyTables.push(Math.round(Math.random()*20) + 1)
    };
    return readyTables;
};

const displayTables = () => {
    const tablesMapped = getReadyTables().map(table => {
        return `<div class="table">${table}</div>`
    });
    
    return tablesMapped.join('');
};

displayTables();

const tablesSection = document.getElementById('tables');
tablesSection.innerHTML = displayTables();
