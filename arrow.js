// old way of using object properties inside a function 

// const obj={
//     name: "Abizer Lohawala",
//     role :"Technical Trainee",
//     experience:"nil",
//     show : function() {
//         let that=this
//         setTimeout(function()
//         {
//             console.log(that.name);
//             console.log(that.role);
//         },2000)
//     }


// }
// obj.show()

//new way using arrow function
const obj={
    name: "Abizer Lohawala",
    role :"Technical Trainee",
    experience:"nil",
    show : function() {
        setTimeout(()=>
        {
            console.log(this.name);
            console.log(this.role);
        },2000)
    }


}
obj.show()