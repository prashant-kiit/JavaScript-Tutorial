function fun1() {
    return new Promise((resolve, reject) => {
        setTimeout(function def() {
            console.log('I am fun1');
            const error = false;
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

async function init() {
    await fun1().catch(error => console.log(error));
    fun2();
}

init();