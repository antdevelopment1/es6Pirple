// Functions

var sayHi = function() {
    console.log("Hi")
}


var sayBye = () => {
    console.log("bye")
}

sayHi();
sayBye();


const multiplyer = (num1, num2) => {
    return num1 * num2;
}

console.log(multiplyer(10,10))

const users = [
    {name: "Gabe", age: 90},
    {name: "Lisa", age: 50},
    {name: "Aaron", age: 62}
];

const mapUserNames = (arr) => {
    const nameOfUsers = users.map((user) => {
        return user.name;
    });

    return nameOfUsers
}

console.log(mapUserNames(users));

// We can omit the return keyword
const addStuff = (a, b) => a + b;

console.log(addStuff(10,20));


