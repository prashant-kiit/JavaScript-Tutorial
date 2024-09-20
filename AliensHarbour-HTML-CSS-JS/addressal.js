let flag = 1;
let colorName = "blue"; 
function addressal() {
    if (flag==1) {
        // output = api.call()
        // document.getElementById("address_").innerHTML = "${output}";
        document.getElementById("address_").innerHTML = "Aliens! Hello";
        document.querySelector(".address").style.color = colorName;
        flag = 0;
        colorName = "green"; 
    }
    else {
        document.getElementById("address_").innerHTML = "Hello Aliens!";
        document.querySelector(".address").style.color = colorName;
        flag = 1;
        colorName = "blue"; 
    }
}