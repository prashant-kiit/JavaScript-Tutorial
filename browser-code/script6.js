console.log("Main Running");

const parent = () => {
    console.log("Parent Running");
    for (let i = 0; i < 5; i++) {
        console.log("i", i);
    }
    for (var k = 0; k < 5; k++) {
        console.log("k", k);
    }
    
    console.log("Parent Running");
}

parent();

