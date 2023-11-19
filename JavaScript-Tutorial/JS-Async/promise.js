function fun1() {
    return new Promise((resolve, reject) => {
        setTimeout(function def() {
            console.log('I am fun1');
            const error = true;
            if(!error) {
                resolve();
            }
            else
                reject('Error in fun1()');
        }, 10000);
    });
}

function fun2() {
    setTimeout(function def() {
        console.log('I am fun2');
    }, 5000);
}


fun1().then(fun2).catch(err => console.log('Fix ' + err));