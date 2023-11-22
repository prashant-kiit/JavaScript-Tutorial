function parentFunction(type) {
    return function() {
        if (type == 1) {
            console.log('function form ' + type);
        }
        if (type == 2) {
            console.log('function form ' + type);
        }
        if (type == 3) {
            console.log('function form ' + type);
        }
    };
}

let fun1 = parentFunction(1);
let fun2 = parentFunction(2);
let fun3 = parentFunction(3);

fun1();
fun2();
fun3();