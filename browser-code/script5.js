console.log("Main Running");

var a = 10;
function parent() {
    var b = 20;
    const child = () => {
        var c = 30;
        const grandChild = () => {
            console.log("a", a);
            console.log("b", b);
            console.log("c", c);
            console.log("this", this);
        }
        grandChild();
    }
    child();
}
parent();