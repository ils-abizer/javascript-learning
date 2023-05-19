// syntax of promise 

let p1=new Promise(function(resolve,reject){
    console.log("Promise is pending")
    setTimeout(()=>{
        resolve(true)
    },5000)
})

let p2=new Promise(function(resolve,reject){
    console.log("Promise is pending")
    setTimeout(()=>
    {
        // console.log("Promise Reject")
        reject("Promise Rejected ")

    },5000)
    reject("Promise Rejected ")

})

// p1.then((value)=>console.log(value))
p2.catch((error)=>console.log("some error occured on p2"))


// promise chaining
p1.then((value)=>{
    console.log(value)
    let p3= new Promise((resolve,reject)=>{
        setTimeout(()=>resolve(20000),2000)
        
    })
    return p3
}).then((value)=>{
    console.log(value)
})


// let promise_all=Promise.all([p1])
// let promise_all=Promise.allSettled([p1,p2])
// let promise_all=Promise.race([p1])
// let promise_all=Promise.any([p1,p2])
promise_all.then((value)=>{
    console.log(value)
})