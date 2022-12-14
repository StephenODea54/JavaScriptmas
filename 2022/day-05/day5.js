const products = [
    {item: "🍭", price: 2.99, type: "sweet"},
    {item: "🍫", price: 1.99, type: "sweet"},
    {item: "🥫", price: 1.99, type: "savory"},
    {item: "🍬", price: 0.89, type: "sweet"},
    {item: "🥦", price: 3.99, type: "savory"},
    {item: "🍖", price: 3.99, type: "savory"}
];

const getSaleItems = (data) => {
    const candyPrices = data
        .filter(product => product.type === 'sweet')
        .map(product => `{item: ${product.item}, price: ${product.price}}`);
    
    console.log(candyPrices);
}

getSaleItems(products);
