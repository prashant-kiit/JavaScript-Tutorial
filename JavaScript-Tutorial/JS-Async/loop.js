

function fun2() {
    for (let i = 0; i < 10; i++) {
        setTimeout(function def() {
            console.log('I am fun2');
        }, 5000);        
    }
}

function fun1() {
    for (let i = 0; i < 10; i++) {
        setTimeout(function def() {
            console.log('I am fun1');
        }, 2500);
    }
}

fun1();
fun2();