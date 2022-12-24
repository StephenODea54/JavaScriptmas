import products from "./data.js";

const sortProducts = (data) => {
    const compare = (a, b) => {
        if (a.price < b.price) {
            return -1;
        } else if (a.price > b.price) {
            return 1;
        } else {
            return 0;
        }
    }
    
    const productsSorted = data.sort(compare);
    
    productsSorted.forEach(el => {
       console.log(`${el.product}, ${el.price}`); 
    });
}

sortProducts(products)

// const listByCheapest = sortProducts(products);
// console.log(listByCheapest);
