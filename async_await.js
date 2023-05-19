 let a=async ()=> {
    let delhi_weather=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('27 degree Celcius')

        },2000)
    })
    let banglore_weather=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('21 degree Celcius')

        },5000)
    })
    let delhiW=await delhi_weather 
    console.log(delhiW)
    let bangloreW=await banglore_weather 
    console.log(bangloreW)
    return [delhiW,bangloreW]

}
console.log(a())