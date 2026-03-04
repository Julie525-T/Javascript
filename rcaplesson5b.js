// 1. Create an arrow function that accepts a number and prints all even numbers from 1 to n

const evennumbers=(n)=>{
    for (let i=1;i<=n;i++)
        {if(i%2==0)
            {console.log("this is an even number",i);
                }

            }
        }

 evennumbers(20)       

 console.log(".....................")

//  2.Create an arrow function that prints all odd numbers from 1 to n using a while loop

const oddnumbers=(n)=>{
    let i=1;
    while(i<=n){
        if(i%2 !==0)
            {console.log("this is an odd number",i);
    }
    i++;
}
};
oddnumbers(10);

console.log("===========")

// 3.Create an arrow function that prints numbers from n down to 1

const number=(n)=>{
    while(n>=1){
        console.log(n);
        n--
    }
}
number(10)


// 4.write an arrow function square that takes a number as a parameter and logs its square 

const square=(n)=>{
    let square=n**2
    
    

    console.log("The square of the number is",square)

}

square(200)




// 5. print numbers from 1 to n and 
// If divisible by 3 "Fizz"
// if divisible by 5 "Buzz"
// if divisible by both "FizzBuzz"

const numberdivisibility=(n)=>{
    let i=1;
    while(i<=n){
        if(i%5 ==0 && i%3 ==0)
            {console.log("FizzBuzz");
    }
        else if(i%5 ==0){
            console.log("Buzz");
        }

        else if(i%3==0){
            console.log("Fizz");
        }
        
    i++;
}
};
numberdivisibility(15);
numberdivisibility(10);
numberdivisibility(9)






