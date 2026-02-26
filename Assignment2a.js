let salary=5000

if (salary>0 && salary<=30000){
    console.log("The tax rate is 10%")
}

else if (salary>30000 && salary<=60000){
    console.log("The tax rate is 15%")
}

else if (salary>60000 && salary<=100000){
    console.log("The tax rate is 20%")
}
else if (salary>100000){
    console.log("The tax rate is 25%")
}

else{
    console.log("Invalid")
}