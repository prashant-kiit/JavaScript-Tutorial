console.log("Main Running")

const person = {
    name: "Prashant",
    greet() {
        console.log("Hello, " + this.name);
    }
};

const alien = {
    name: "Alien",
    greet() {
        console.log("Hello, " + this.name);
    }
};

const greet = person.greet;
greet();

const boundGreet = person.greet.bind(alien);
boundGreet();