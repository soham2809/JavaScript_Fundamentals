const input = document.getElementById("my_Div");
const button = document.getElementById("click");
function toggle(){
    if (input.innerHTML == "The most affordable learning platform"){
        input.innerHTML = "PW-Skills";
}else{
    input.innerHTML = "The most affordable learning platform";
}
}
button.addEventListener("click",toggle);