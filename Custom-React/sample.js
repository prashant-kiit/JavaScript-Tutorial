const button = document.getElementById("btn");
const input = document.getElementById("hello")

button.addEventListener("click", (event) => {
    let currentNumber = Number(input.innerHTML);
    input.innerHTML = ++currentNumber;
});