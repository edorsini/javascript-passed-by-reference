console.log("--------------------------------------");
console.log("JavaScript passed by reference example");
console.log("--------------------------------------");

let aka = "Java Expert";

let developer = {
    name: 'Ed',
    age: 18,
    nickname: 'JavaScript Ninja'
};

console.log("Original value of object:");
console.log(JSON.stringify(developer, null, 2));
console.log("Original value of string:");
console.log(aka);

console.log("--------------------------------------");


// Notice how I can call the function that is not defined yet (a JavaScript feature: hoisting)
// This is NOT possible in Python...


changeValueOfObjectProperty(developer);
console.log("Value of object after function call:");
console.log(JSON.stringify(developer, null, 2));

changeValueOfString(aka);
console.log("Value of string after function call:");
console.log(aka);

function changeValueOfObjectProperty(obj) {
    // Objects are passed in by reference!
    obj.age = 98;
}

function changeValueOfString(str) {
    // Primitive types are passed in by value!
    str = "Pythonista";
}