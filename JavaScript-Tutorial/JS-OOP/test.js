function func() {
    let arr1 = [];
    for(let i=0; i < 3; i++) {
        arr1.push(
            ()=>{
                console.log(i + 'th element');
            }
        );
    }
    return arr1;
}

let a = func();
a[0]();
a[1]();
a[2]();