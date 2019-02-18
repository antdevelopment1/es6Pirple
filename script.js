// Let and const are scoped to the block it is in and var is scoped to the function
let count = 0;
let color;

while (count <= 100) {
    console.log(count);
    count++;
}

color = 'brown';

if (color === 'green') {
    console.log('Why hello there');
} else {
    console.log("Goodbye");
}

color = 'green';

if (color === 'green') {
    console.log('Why hello there');
} else {
    console.log("Goodbye");
}