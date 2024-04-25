const cart =[{
"name":"I-phone",
"price":1000,
"quantity":5
},
{
    "name":"Samsung s22 ultra",
    "price":2000,
    "quantity":3
},
{
    "name":"Oneplus-NORD CE lite 5G",
    "price":3000,
    "quantity":2
},
{
    "name":"Redmi Note 10",
    "price":1500,
    "quantity":4
}
]
const price=(products)=>{
    const prices=[];
    for(let i=0;i<products.length;i++){
        prices.push({name:products[i].name,total:products[i].price*products[i].quantity});
    }
    return prices;
}

console.log("Price",price(cart));
