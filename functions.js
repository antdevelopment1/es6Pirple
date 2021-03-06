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


// Another option to do the same thing as map user name
const anotherMapFunction = (arr) => arr.map(user => user.name)

console.log(anotherMapFunction(users));


// Filter function
const numbers = [1,2,3,4,5,6,7,8,9,10];
const getEvens = (arr) => {
    const filteredNumbers = numbers.filter( (number) => {
        return number % 2 === 0;
    })

    return filteredNumbers;
}

console.log(getEvens(numbers));


// For each which doesnt return an array
const doubleNumbers = (num) => {
    const numberContainer = [];

    num.forEach((number) => {
        // console.log(num)
        const double = number * 2;
        numberContainer.push(double);
    })

    return numberContainer;
}

console.log(doubleNumbers(numbers));


// Setting defaults
function addNumbers(x, y) {
    x = x || 5;
    y = y || 10;
    return x + y;
}

console.log(addNumbers());

// Alternative to setting defaults
function multiply(x=10, y=20) {
    return x + y;
}

console.log(multiply());


// Setting defaults for different data types 
function stringSplitter(str="Hello how are you there") {
    return str.split(" ");
}
console.log(stringSplitter())

// Setting defaults using variables
const vari = "Something cool";

function logItOut(str=vari) {
    return str.split(" ");
}

console.log(logItOut());

// Setting defaults using booleans inside an object
const bankAccount = {
    canSpendMoney: true,
    balance: 100
}
function purchaseItem(price, acct=bankAccount) {
    if (acct.canSpendMoney) {
        acct.balance -= price;
        if (acct.balance <= 0) {
            acct.canSpendMoney = false;
        }
        return true;
    } else {
        return false;
    }
}

console.log(purchaseItem(1000))
console.log(purchaseItem(10))

