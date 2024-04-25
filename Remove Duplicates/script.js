const cart_items=["Orange","Guava","Mango","Grapes","Litchi","Grapes","Mango","Litchi"];
console.log("The original cart items are:",cart_items);
//The indexOf() method returns the position of the first occurrence of a value in a string.
const updated_cart_items=cart_items.filter((item,index)=>cart_items.indexOf(item)==index);
console.log("The updated cart items (by removing duplicates) are:",updated_cart_items);
