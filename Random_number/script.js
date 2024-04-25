function random_number(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}
result=random_number (0,100);
console.log(result);