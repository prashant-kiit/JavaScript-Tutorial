function fun2() {
    console.log('fun2 ran');
}

(function fun1(call) {
    console.log('fun1 ran');
    call();
})(fun2);