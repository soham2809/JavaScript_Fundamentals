function rentalCalculator(daysRented,carType)
{
    let price = 0;
    switch(carType)
    {
        case "Economy":
            price =4000 ;
            break;
        case "Midsize":
            price = 10000;
            break;
        case "Luxury":
            price = 20000;
            break;
        default:
            console.log("Invalid car type");
            break;
}

    return price * daysRented;
}

let customer1 = rentalCalculator(100,"Economy");

console.log("The customer1 should pay: Rs" , customer1,"only");