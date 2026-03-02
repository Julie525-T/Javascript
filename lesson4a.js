// Function with parameters

function hello(greetings){
    console.log("hello",greetings)
}

hello("Joe")

hello("Julie")


function favouriteCounty(county){
    console.log("My favourite county is",county)
}

favouriteCounty("Nairobi")

favouriteCounty("Kiambu")


favouriteCounty("Vihiga")

favouriteCounty("Kisumu")

console.log("      ++++         ")


function addition(num1,num2){
   let sum=num1+num2
    console.log("The value of the addition is",sum)

}

addition(20,50)

console.log("               ")


function subtraction(num1, num2){
   let  difference=num1-num2
    console.log("The value of the subtraction is",difference)

}
subtraction(1908,687)

console.log("               ")


function multiplication(num1,num2){
    let multiplication=num1*num2
    console.log("The vaalue of the multiplication is",multiplication)
}

multiplication(20,5)

console.log("               ")


function division(num1,num2){
   let division=num1/num2
    console.log("The value of the division is",division)
}
division(8075,5)

console.log("               ")

function simpleIntrest(rate, time, principle){
   let simpleIntrest=principle*rate*time
    console.log("The value of the simple intrest is", simpleIntrest)

}
simpleIntrest(0.02,5,20000)

console.log("               ")

function BMI(height,weight){
   let bmi=weight/(height**2)
    console.log("The value of the BMI is",bmi)
}
BMI(6,50)