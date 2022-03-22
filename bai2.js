const person = [
	{ name: 'John' , age: 24 },
	{ name: 'Pete' , age: 25 },
	{ name: 'Mary' , age: 28 }
];

const nameArray = person.map(x => x.name);
console.log(nameArray);
