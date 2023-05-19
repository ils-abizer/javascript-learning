// higher order function 
// Basically, a function which takes another function as an argument or returns a function is known as a higher order function
// first order 
var a=(x,y)=>{
    return x+y

}
// higher order 
var b=(a)=>{
    console.log(a)

}
b(a(10,200))


// closures 
function top1()
{
    var a='Abizer'
    function display()
    {
        console.log(a)
    }
    a='kvothe'
    return display
}
let m=top1()
m()


function ret_func()
{

    const p=()=>
    {
        let a=1
        console.log(a)
        const q=()=>
        {
            let a=2
            console.log(a)
            const r=()=>
            {
                let a=3
                console.log(a)
            }
            r()
        }
        q()
    
    }
    return p

}    

let closure_=ret_func()
closure_()

// JavaScript Declarations are Hoisted
// In JavaScript, a variable can be declared after it has been used.

// In other words; a variable can be used before it has been declared.

console.log(hoist1)
var hoist1=9
console.log(hoist1)
// const hoist=()=>{
//     console.log(r)
//     let r=10
//     console.log(r)
// }
// hoist()


// A Pure Function is a function (a block of code) that always returns the same result if the same arguments are passed. It does not depend on any state or data change during a program’s execution. Rather, it only depends on its input arguments.
function calculateGST( productPrice ) {
    return productPrice * 0.05;
    }
    console.log(calculateGST(15))

// Immediately Invoked Function Expression
// Regular Function.
function Greet() {
    console.log("Tony Stark");
};
// Execution of Regular Function.
Greet();

// IIFE creation and execution.
(function() {
    console.log("Ironman");
})();