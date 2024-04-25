const cart =[{
    "name":"T-shirt",
    "sell_price":467,
    "cost_price":1250
},

{
  "name":"Jeans",
  "sell_price":2200,
  "cost_price":4790
   
},
       

{
  "name":"Shirt",
  "sell_price":1266,
  "cost_price":2230
       
},
{
  "name":"Trousers",
  "sell_price":1500,
  "cost_price":2300   

 }
]  
const discount =(products)=>{
    const discount_prices=[];
    let discount=0;
    for(let i=0;i<products.length;i++){
         discount=Math.floor(((products[i].cost_price-products[i].sell_price)/products[i].cost_price)*100);
        discount_prices.push({name:products[i].name,discount_percentage:discount});
    }
    return discount_prices;
}

console.log(discount(cart));