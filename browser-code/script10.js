"use strict"
console.log("Main Running");

var a = 10;
function parent() {
    var b = 20;
    function child() {
        var c = 30;
        function grandChild() {
            console.log("a", a);
            console.log("b", b);
            console.log("c", c);
        }
        grandChild();
    }
    child();
}
parent();