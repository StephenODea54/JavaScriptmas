const kittyScores = [
    [39, 99, 76], 89, 98, [87, 56, 90], 
    [96, 95], 40, 78, 50, [63]
];

const kittyPrizes = [
    ["💰", "🐟", "🐟"], "🏆", "💐", "💵", ["💵", "🏆"],
    ["🐟","💐", "💐"], "💵", "💵", ["🐟"], "🐟"
];

const flatten = (arr) => {
    const flatArr = [];
    
    arr.forEach(el => {
        if (typeof el !== 'object') {
            flatArr.push(el);
        } else {
            el.forEach(el => flatArr.push(el));
        }
    })
    
    return flatArr;
}

console.log(flatten(kittyPrizes));
console.log(flatten(kittyScores));
