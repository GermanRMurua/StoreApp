let res = await fetch('https://api.escuelajs.co/api/v1/products');
let data = res.json();

let products = data.slice(1, 5);
console.log(products);