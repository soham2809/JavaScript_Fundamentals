// Query Selector 
const btn = document.getElementById("button");
function ramdomColor(){
    // The basic analogy is that we have to find the hex value of the color ,and this hex value 
    // comes from 0123456789 and ABCDEF, any 6 values are taken from this and repitation is allowed .
    let val="0123456789ABCDEF";
    let cons ="#";
    for(i=0;i<6;i++)
    {
        cons=cons+val[Math.floor(Math.random()*16)]//Math.random()ranges from 0 to 0.99 so its multiplied with 16 
                                     // and then taken its floor value .
    }
     return cons;
};
console.log(ramdomColor());
function changeRandomColor(){
    document.body.style.backgroundColor = ramdomColor();
}

btn.addEventListener("click",changeRandomColor);