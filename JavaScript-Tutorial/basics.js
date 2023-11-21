// print
console.log('Hello World! How are you?');

// primtive data types
let myName = null;
const nickName = "Chinku";
let surname = "Singh";
console.log(myName);
myName = 56;
console.log(myName);
console.log(nickName);
console.log(surname);
console.log(typeof myName);

// object
let person = {
    sender: "Rama",
    message: "How are you?",
    receiver: "Shyama"
};
console.log(person);
console.log(person.sender);
console.log(person['message']);

// array
let list = ["Ravana", 67, ()=>{console.log('Hello');}];
list[5] = "Kansa";
console.log(list);
console.log(list[0]);
console.log(list[1]);
list[2]();

// function
function greet(name) {
    console.log("Hello " + name);
    console.log(arguments);
    console.log(arguments[0]);

}
greet("Balarama");
greet("Bheem");
greet(typeof greet);

// devtools for analyzing prototypes/parent object
console.log(nickName.constructor);

// normal global scope
let a = 2;
function some1() {
    console.log(a);
}
function fun1() {
    let a = 3;
    some1();
}
fun1();

// closure
let c = 2;
function fun2() {
    let c = 3;
    function some2() {
        console.log(c);
    }
    some2();
}
fun2();

// closure call
let d = 2;
function fun3() {
    let d = 3;
    function some3() {
        console.log(d);
    }
    return some3;
}
let closure = fun3();
closure(); // some3()

// closure and global
let e = 2;
function fun2() {
    function some2() {
        console.log(e);
    }
    some2();
}
fun2();

// operators
let some = null;
console.log('true' - 1);
if ('some') {console.log('something')}
3 + 4;