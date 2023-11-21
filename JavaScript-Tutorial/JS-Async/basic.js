function fun2() {
    setTimeout(function def() {
        console.log('I am fun2');
    }, 5000);
}

function fun1() {
    setTimeout(function def() {
        console.log('I am fun1');
    }, 10000);
}

fun1();
fun2();