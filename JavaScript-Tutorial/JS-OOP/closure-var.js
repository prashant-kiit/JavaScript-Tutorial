function fun() {
    // var i; hoisted
    let arr = [];
    for (var i = 0; i < 3; i++) {
        arr.push(()=>{console.log(i + 'th element');})
    }
    return arr;
}

var funny = fun();
funny[0]();
funny[1]();
funny[2]();

function func() {
    let arr1 = [];
    for(let i=0; i < 3; i++) {
        arr1.push(
            ()=>{
                console.log(i + 'th element');
            }
        );
        // i gets destroyed
    }
    return arr1;
}

let a = func();
a[0]();
a[1]();
a[2]();
