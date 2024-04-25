window.onload=function(){
    const check=word=>{
        if(word.length>8){
            return'<span class="highlight">'+word+'</span>'

        }
        else{
            return word
        }
    }
    const text=document.getElementById("sample")
    text.innerHTML=text.innerText
    .trim()
    .split(" ")
    .map(check)
    .join(" ")
    }