	// Defining object

// function c{
//     console.log('function type1');
// }
// c=function{console.log('Type2')}
// c:()=>{
//     console.log('Type3')
// }

// creating object using object literal 
	let person = {
		first_name:'Tony',
		last_name: 'Stark',
	
		//method
		getFunction : ()=>{
			return (`The name of the person is ${person.first_name} ${person.last_name}`)
		},
		//object within object
		phone_number : {
			mobile:'12345',
			landline:'6789'
		}
	}
	console.log(person.getFunction());
	console.log(person.phone_number.landline);



	// Using a constructor
	function person(first_name,last_name){
	this.first_name = first_name;
	this.last_name = last_name;
	}
	// Creating new instances of person object
	let person1 = new person('Mukul','Latiyan');
	let person2 = new person('Rahul','Avasthi');
	
	console.log(person1.first_name);
	console.log(`${person2.first_name} ${person2.last_name}`);



