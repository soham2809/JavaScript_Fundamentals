function bill_spliter(cost_of_dish, number_of_people) {
    var total_bill=0;
    for(let i=0;i<cost_of_dish.length;i++){
        total_bill+=cost_of_dish[i];
    }
    return total_bill/number_of_people;
}
console.log("After bill spliting each should pay Rs",bill_spliter([100,200,300,400],4));