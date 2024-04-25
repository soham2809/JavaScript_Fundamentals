const input=document.getElementById("username");
const button=document.getElementById("check");
function capitalizeFirstLetter(string) {
    var letter=string.charAt(0);
    letter=(letter==letter.toUpperCase())? letter:letter.toUpperCase();
    string=letter+string.slice(1);
    return string;
}

button.addEventListener("click",()=>{
    input.value=capitalizeFirstLetter(input.value);

});
   