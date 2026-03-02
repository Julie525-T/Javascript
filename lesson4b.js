// Anonymous functions. They  are functions without a name

const greet=function(greet){
    console.log("welcome to",greet)
}

greet("Modcom")

greet("the world of technology")


const about=function(describe){
    console.log("My experience at Modcom has been",describe)
}
about("one that expands my knowledge base.")

about("exciting because I get a chance to meet new people.")

about("one that has helped me learn to be independent. I have learned to stay away from parents and make my own descions.");

// Immediately invoked function expressions(IIFE)-his are fuinction s that run       immediately when they are called

// -They are self executing

(function (){
    console.log("Welcome to the world of technology");
})()




