let flag = 1;
let colorName = "blue"; 
function addressal() {
    if (flag==1) {
        document.getElementById("address").innerHTML = "Aliens! Hello";
        document.querySelector(".address").style.color = colorName;
        flag = 0;
        colorName = "green"; 
    }
    else {
        document.getElementById("address").innerHTML = "Hello Aliens!";
        document.querySelector(".address").style.color = colorName;
        flag = 1;
        colorName = "blue"; 
    }
}