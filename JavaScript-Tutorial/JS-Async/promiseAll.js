const promise1 = 'I am promise1';
const promise2 = Promise.resolve('I am promise2');
const promise3 = new Promise((resolve,reject) => {
    setTimeout(resolve('I am promise3'), 2000);
});

// const promise3 = new Promise((resolve,reject) => {
//     setTimeout(resolve, 2000, 'I am promise3');
// });

// const promise3 = new Promise((resolve,reject) => {
//     setTimeout(resolve(alert('Success:promise3')), 2000);
// });

const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());

Promise.all([promise1,promise2,promise3, promise4]).then((values) => {console.log(values);}, (error) => {console.log(error)});