const products = [
{id: 1, name:"Laptop", price: 1200},
{id: 2, name:"Phone", price: 800},
{id: 3, name:"Monitor", price: 300},
{id: 4, name:"Keyboard", price: 100},
];


const expenProducts = products.filter(product => product.price > 500);
console.log(expenProducts);


const sortiranjePoCena = [...products].sort((a,b) => a.price - b.price);
console.log(sortiranjePoCena);


const siteCeni = products.reduce((sum,product) => sum + product.price, 0);
console.log("Zbir" , siteCeni);


const telefon = products.find(product => product.name === "Phone");
console.log(telefon); 