console.log("Main Running");

function parent() {
    var a = 10;
    function child() {
        console.log("a", a);
    }
    return child;
}

var CHILD = parent();
CHILD();