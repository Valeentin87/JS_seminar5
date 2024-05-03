// Дан массив products, необходимо цену каждого продукта уменьшить на 15% используя метод forEach.

const products = [
{
id: 3,
price: 200,
},
{
id: 4,
price: 900,
},
{
id: 1,
price: 1000,
},
];


products.forEach(element => element.price *= 0.15);
for (const product in products) {
    console.log(products[product]);
}    
