var Btn = document.getElementById("submitBtn");
var password = document.getElementById("password");
var confirmPassword = document.getElementById("confirmPassword");

submitBtn.addEventListener("click", ()=>{
    if(password.value == confirmPassword.value){
        alert("Password Matched");
    }else{
        alert("Password does not match");
    }
});