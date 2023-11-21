function fun1() {
    console.log('normla fun');
}
fun1();

let fun2 = function() {
    console.log('lambda fun with function keyword');
}
fun2();

let fun3 = () => {
    console.log('lambda fun with arrow operator');
}
fun3();

let fun4 = () => {
    return () => {console.log('returned inner lambda fun');};
}
fun4()();

let fun5 = () => {
    return () => {console.log('returned inner lambda fun and assigned in variable');};
}
let closure = fun5();
closure();

(() => {
    console.log('iife without return');
})();

let fun6 = (() => {
    console.log('iife with return');
    return () => {console.log('returned an function object using iife');};
})();
fun6()