function log(a) {
    // default value of a is undefined
    console.log('a is ' + a + '\n');
}

//
// Statement
//
fun1();
function fun1() {
    console.log('Normal function\n');
} 
// this as well is lambda like function
/* 
let fun1 = function() {
    console.log('Normal function\n');
} 
*/
log(fun1);
log(fun1());

//
// Expression
//
let fun2 = function() { 
    console.log('Lambda function without arrow symbol\n'); 
}
fun2();
log(fun2);
log(fun2());

let fun3; // set to undefined
// fun3(); TypeError: fun3 is not a function 
fun3 = () => { 
    console.log('Lambda function with arrow symbol\n'); 
}
fun3();
log(fun3);
log(fun3());