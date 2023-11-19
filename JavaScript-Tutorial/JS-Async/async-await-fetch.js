async function fetchUsers() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const body = await response.json();
    console.log(body);
}
// with fetch() async/await  or .then() are mandatory
// fetch works based on promises
fetchUsers();