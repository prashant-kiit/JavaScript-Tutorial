console.log("Main Running");

var a = 10;
function parent(child, grandChild) {
    var b = 20;
    child(grandChild, b);
}

function child(grandChild, b) {
    var c = 30;
    grandChild(b, c);
}

function grandChild(b, c) {
    console.log("a", a);
    console.log("b", b);
    console.log("c", c);
}

parent(child, grandChild);