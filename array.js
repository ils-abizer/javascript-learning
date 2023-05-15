// creating an array in javascript 
let arr=[12,22,33,44]
var abc=new Array(1,2,3)
/*
array method
.length() to check length of array

.push() to add elements 

.pop() to remove elements

typeof arr   to check array type 

.toString() to convert array to String

join()   It behaves just like toString(), but in addition you can specify the separator:

shift()    The shift() method removes the first array element and "shifts" all other elements to a lower index.

unshift()   The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:

The concat() method creates a new array by merging (concatenating) existing arrays

The flat() method creates a new array with sub-array elements concatenated to a specified depth.

The splice() method can be used to add new items to an array:

The slice() method slices out a piece of an array into a new array.

This example slices out a part of an array starting from array element 1 ("Orange"):

Example
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1);

The sort() method sorts an array alphabetically:

The reverse() method reverses the elements in an array.
You can use it to sort an array in descending order:



*/
// Mapping array
var map1=[45,4,5,6,]
map1=map1.map(map_func)

function map_func(value){
    return value*3
}


map1=map1.flatMap((x)=>x*5)
console.log(map1)




/*
A Map holds key-value pairs where the keys can be any datatype.

A Map remembers the original insertion order of the keys.
Essential Map Methods

Method	Description

new Map()	Creates a new Map
set()	Sets the value for a key in a Map
get()	Gets the value for a key in a Map
delete()	Removes a Map element specified by the key
has()	Returns true if a key exists in a Map
forEach()	Calls a function for each key/value pair in a Map
entries()	Returns an iterator with the [key, value] pairs in a Map


Property	Description

size	Returns the number of elements in a Map

*/ 

// map
let fmr=[45,31,25,7,2,1]
fmr=fmr.map((value)=>{
    console.log(value)
    return value+1

})
// filter 
console.log(fmr)

let a2=fmr.filter((a)=>{
    return a<30
})
console.log(a2)

// reduce
