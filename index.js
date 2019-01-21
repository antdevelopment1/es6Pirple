var people = new Object();

people['1'] = 'one';
people['2'] = 'two';
people['3'] = 'three';

console.log(people);

var lotsOfPeople = {
    1: 'one',
    2: 'two',
    3: 'three',
    'age': 50,
}

console.log(lotsOfPeople);

console.log(lotsOfPeople.age);

var donut = {
    type: "chocolate",
    glazed: true,
    sweetness: 8,
    hasChocolate: true,
    sayType: function () {
        console.log('Type: ' + this.type);
    },
    showSweetness: function() {
        console.log('Sweetness: ' + this.sweetness + '/10');
    }
}

donut.sayType();
donut.showSweetness();


var donut2 = {
    type: "glazed",
    glazed: true,
    sweetness: 9,
    hasChocolate: false,
    sayType: function () {
        console.log('Type: ' + this.type);
    },
    showSweetness: function() {
        console.log('Sweetness: ' + this.sweetness + '/10');
    }
}

donut2.sayType();
donut2.showSweetness();

// The way illustrated above is very tedious
// We can use a constructor pattern for creating objects

function Donut(type, glazed, sweetness, hasChocolate) {
    this.type = type;
    this.glazed = glazed;
    this.sweetness = sweetness;
    this.hasChocolate = hasChocolate;
    this.sayType = function () {
        console.log('Type: ' + this.type);
    }
    this.showSweetness = function() {
        console.log('Sweetness: ' + this.sweetness + '/10');
    }

}

var newDonut = new Donut('rasberry', false, 9, false);

console.log(newDonut);
newDonut.sayType();
newDonut.showSweetness();


// Arrays Collections of Data

var myNamesArray = ["John", "Sam", "Justin", "Sarah", "Emily"];
var lastNameInArray = myNamesArray.slice(myNamesArray.length - 1);
console.log(lastNameInArray);