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