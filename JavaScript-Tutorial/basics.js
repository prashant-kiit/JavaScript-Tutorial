console.log('Hello World! How are you?');
let myName = null;
const nickName = "Chinku";
let surname = "Singh";
console.log(myName);
//myName = 56;
console.log(myName);
console.log(nickName);
console.log(surname);
console.log(typeof myName);

let person = {
    sender: "Rama",
    message: "How are you?",
    receiver: "Shyama"
};

console.log(person);
console.log(person.sender);
console.log(person['message']);


let list = ["Ravana", 67];
list[5] = "Kansa";
console.log(list);
console.log(list[0]);
console.log(list[1]);

function greet(name) {
    console.log("Hello " + name);
}

greet("Balarama");
greet("Bheem");
greet(typeof greet);

console.log(nickName.constructor);