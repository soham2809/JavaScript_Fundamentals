let circle=document.querySelector(".circle");
let moveBy=10;

window.addEventListener('load',()=>{
    circle.style.position='absolute';
    circle.style.left=0;
    circle.style.top=0;
});

window.addEventListener('keyup',(e)=>{
    switch (e.key){
        case 'ArrowUp':
            circle.style.top=parseInt(circle.style.left)-moveBy+'px';
            break;
        case 'ArrowDown':
            circle.style.top=parseInt(circle.style.top)+moveBy+'px';
            break;
        case 'ArrowLeft':
            circle.style.left=parseInt(circle.style.left)-moveBy+'px';
            break;
        case 'ArrowRight':
            circle.style.left=parseInt(circle.style.left)+moveBy+'px';
            break;
    }
})