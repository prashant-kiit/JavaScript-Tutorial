let person = {
    name: "Prashant",
    address: {
        city: "Ranchi",
        country: "India"
    },
    age: 26
}

console.log(person);

let jsonPerson = JSON.stringify(person);

console.log(jsonPerson);

let personJson = '{"name":"Prashant","address":{"city":"Ranchi","country":"India"},"age":26}';

console.log(personJson);

let personObject = JSON.parse(personJson);

console.log(personObject);