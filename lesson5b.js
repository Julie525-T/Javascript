// Arrow functions with parameters

const sayHello=(name)=>{
    console.log("Hello",name)
}
sayHello("Joe")
sayHello("Julie")


console.log("                     ")


const favouriteCounty=(county)=>{
    console.log("My favourite county is",county)
}

favouriteCounty("Nairobi")
favouriteCounty("Kiambu")
favouriteCounty("Vihiga")



console.log("====================================")


const add=(num1,num2)=>{
    sum=num1+num2
    console.log("The value of the sum is",sum)
}
add(30,20)

const subtraction=(num1,num2)=>{
    difference=num1-num2
    console.log("The value of the subtraction is",difference)

}
subtraction(175,67)

const division=(num1,num2)=>{
    quotient=num1/num2
    console.log("The value of the division is",quotient)

}

division(65892,90)

const Modulus=(num1,num2)=>{
    modulus=num1%num2
    console.log("The value of the modulus is",modulus)
}
Modulus(853125,889)

const Simple$Intrest=(rate,time,principle)=>{
    simple_intrest=principle*rate*time
    console.log("The value of simple intrest is",simple_intrest)
}
Simple$Intrest(0.01,5,1739246676)

const BMI=(height,weight)=>{
    bmi=weight/(height**2)
    console.log("The BMI is",bmi)
}
BMI(58,4)

const Area_triangle=(base,height)=>{
    area=0.5*base*height
    console.log("The area of the triangle is",area)
}
Area_triangle(20,10)