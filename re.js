/* 

Regular Expression Modifiers
Modifiers can be used to perform case-insensitive more global searches:

Modifier
i	Perform case-insensitive matching	
g	Perform a global match (find all matches rather than stopping after the first match)	
m	Perform multiline matching

*/

let s='The best liar of the world is the person who tells he is always honest 8109263079';
console.log(s.match(/best/i));
console.log(s.match(/is/g));
/*
[abc]	Find any of the characters between the brackets	
[0-9]	Find any of the digits between the brackets	
(x|y)	Find any of the alternatives separated with |
 */
console.log(s.match(/[ti]/gi));
//doubt
console.log(s.match(/(is|the)/gi)); 

console.log(s.search(/8109263079/dg)); 


