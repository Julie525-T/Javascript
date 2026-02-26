let grossIncome=90000

if (grossIncome<5999){
    console.log("Monthly contribution is 150.00")
}

else if (grossIncome>=6000 && grossIncome<=7999){
    console.log("Monthly contribution is 300.00")
}

else if (grossIncome>=8000 && grossIncome<=11999){
    console.log("Monthly contribution is 400.00")
}

else if (grossIncome>=12000 && grossIncome<=14999){
    console.log("Monthly contribution is 500.00")
}

else if (grossIncome>=15000 && grossIncome<=19999){
    console.log("Monthly contribution is 600.00")
}

else if (grossIncome>=20000 && grossIncome<=24999){
    console.log("Monthly contribution is 600.00")
}

else if (grossIncome>=25000 && grossIncome<=29999){
    console.log("Monthly contribution is 750.00")
}

else if (grossIncome>=30000 && grossIncome<=49999){
    console.log("Your monthly contribution is 850.00")
}

else if (grossIncome>=50000 && grossIncome<=99999){
    console.log("Your monthly contribution  is 1500.00")
}

else if (grossIncome>=100000){
    console.log("Your monthly contribution is 2000.00")
}

else{
    console.log("Invalid")
}