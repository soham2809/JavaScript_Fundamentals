function celsiusToFahrenheit(celsius) {

    var updated_data=[];
    for(let i=0;i<celsius.length;i++){
        updated_data.push(celsius[i]*9/5+32);
    }

    return updated_data;

}

let converter=celsiusToFahrenheit([10,20,30]);
console.log("The farhenheit values are: ",converter);
