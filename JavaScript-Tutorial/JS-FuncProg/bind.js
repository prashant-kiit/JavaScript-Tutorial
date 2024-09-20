let name1 = { 
	name: "Tony"
} 

let name2 = { 
	name: "Stark"
} 
let PrintName = { 
	name: "", 
	sayHi: function () { 
		console.log(this.name); 
	} 
} 

let hiTony = PrintName.sayHi.bind(name1);
let hiStark = PrintName.sayHi.bind(name2);

hiTony();
hiStark();