// A programming language is said to have First-class functions when functions in that language are treated like any other variable. For example, in such a language, a function can be passed as an argument to other functions, can be returned by another function and can be assigned as a value to a variable.



// first class function 

// function can be passed as an argument

function sayhello(){
    return 'Hello';
}
function mainFunc(funct,name){
    console.log(funct(),name)
}

mainFunc(sayhello,'Abizer')

// function can be returned by an another function 

function add(){
    return ()=>{
        console.log('added',10+9)
    }
}


// function can be assigned as a value to a variable object array 
const variable1=function(){}
  
const array1=[1,2,3,function(){}]
const obj={
    getname:function(){}
}

