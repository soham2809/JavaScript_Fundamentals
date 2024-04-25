const original_cart=[1,2,3,4,5,6,7,8,9,10];
var updated_cart_items=[];
for(let i=0;i<original_cart.length;i++){
    original_cart[i]=original_cart[i]*2;
    updated_cart_items.push(original_cart[i]);
}
console.log(updated_cart_items);