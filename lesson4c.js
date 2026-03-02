let addition=function(numb1,numb2){
    sum=numb1+numb2
    console.log("The sum is", sum)
}

addition(2,3);

let subtraction=function(numb1,numb2){
    difference=numb1-numb2
    console.log("The difference is", difference)
}

subtraction(70,3);

let multiplication=function(numb1,numb2){
    product=numb1*numb2
    console.log("The multiplication is", product)
}

multiplication(2,309);

let division=function(numb1,numb2){
    quotient=numb1/numb2
    console.log("The value of division is",quotient)
}
division(300,20)

let modulus=function(numb1,numb2){
    modulus=numb1%numb2
    console.log("The modulus is", modulus)
}

modulus(20,3);

let simple$intrest=function(rate,principle,time){
    simpleIntrest=rate*principle*time
    console.log("The simple intrest is",simpleIntrest)
}

simple$intrest(2,20000,3);


let BMI=function(height,weight){
    bmi=weight/(height**2)
    console.log("The BMI is", bmi)
}

BMI(2,30);

let Area_square=function(side){
    area=side**2
    console.log("The area of the square is",area)
}

Area_square(30);

let Area_triangle=function(base,height){
    area=0.5*base*height
    console.log("The area of the triangle is",area)
}

Area_triangle(2,3);

let Area_circle=function(radius){
    area=22/7*(radius**2)
    console.log("The area of the circle is", area)
}

Area_circle(2,3)

let perimetreCircle=function(diametre){
    perimeter=22/7*diametre
    console.log("The perimeter of the circle is", perimeter)
}

perimetreCircle(35)
