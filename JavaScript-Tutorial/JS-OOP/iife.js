function fun1() {
    console.log('hello1');
}

fun1();

let fun2 = function() {
    console.log('hello2');
}

fun2();

// iife with assignment variable
// iife without return
let fun3 = function() {
    console.log('hello3');
}();

console.log(typeof fun3);

// iife with return
let fun4 = function() {
    return 'hello4';
}();

console.log(typeof fun4);
console.log(fun4);

// iife without assignment variable
(()=>{
    console.log('hello world');
})();

// private variables
(()=>{
    let vari = 2;
    console.log(vari);
})();
