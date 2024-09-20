// Async function to mimic asynchronous operation
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
  
// Asynchronous loop
async function asynchronousLoop() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
        await sleep(1000); // Wait for 1 second (simulating an async operation)
    }
    console.log('Loop finished.');
}

// Call the asynchronous loop function
asynchronousLoop();

function firstFunction() {
    console.log('First function executed.');
    return new Promise((resolve) => {
        // Some asynchronous code in the first function
        setTimeout(() => {
            
            resolve();
        }, 0);
    });
}
  
function secondFunction() {
    // Some code in the second function
    console.log('Second function executed.');
}

// Call functions in sequence using .then()
firstFunction().then(() => {
    secondFunction();
});


async function asyncFunctionWithoutAwait() {
    console.log("This is an asynchronous function without await.");
    return 42;
}
  
// Calling the function
const resultPromise = asyncFunctionWithoutAwait();

resultPromise.then(result => {
    console.log("Result:", result);
});
  
  