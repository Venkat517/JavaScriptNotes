
// JavaScript object is a non-primitive data-type that allows you to store multiple collections of data with different types

// object notation

const student = {
    firstName: 'ram',
    class: 10
};

Here, student is an object that stores values such as strings and numbers.

//JavaScript Object Syntax:

const object_name = {
   key1: value1,
   key2: value2
}

// object creation example
const person = { 
    name: 'John',
    age: 20
};
console.log(typeof person); // object


// Creating Objects using 3 diff ways

1) Using object literal
2) By creating instance of Object directly
3) By using constructor function

// Using Object literal

// program to create JavaScript object using object literal
const person = { 
    name: 'John',
    age: 20,
    hobbies: ['reading', 'games', 'coding'],
    greet: function() {
        console.log('Hello everyone.');
    },
    score: {
        maths: 90,
        science: 80
    }
};

console.log(typeof person); // object

// accessing the object value
console.log(person.name);      // john
console.log(person.hobbies[0]); // reading
person.greet(); // Hello everyone
console.log(person.score.maths); // 90

An object literal uses { } to create an object directly.
An object is created with a key:value pair.
You can also define functions, arrays and even objects inside of an object. You can access the value of the object using dot . notation




// program to create JavaScript object using instance of an object
const person = new Object ( { 
    name: 'John',
    age: 20,
    hobbies: ['reading', 'games', 'coding'],
    greet: function() {
        console.log('Hello everyone.');
    },
    score: {
        maths: 90,
        science: 80
    }
});

console.log(typeof person); // object

// accessing the object value
console.log(person.name);      // john
console.log(person.hobbies[0]); // reading
person.greet(); // Hello everyone
console.log(person.score.maths); // 90

Here, the new keyword is used with the Object() instance to create an object.






// program to create JavaScript object using instance of an object

function Person() {
    this.name = 'John',
    this.age = 20,
    this.hobbies = ['reading', 'games', 'coding'],
    this.greet = function() {
        console.log('Hello everyone.');
    },
    this.score = {
        maths: 90,
        science: 80
    }

}

const person = new Person();

console.log(typeof person); // object

// accessing the object value
console.log(person.name);      // john
console.log(person.hobbies[0]); // reading
person.greet(); // Hello everyone
console.log(person.score.maths); // 90

the Person() constructor function is used to create an object using the new keyword.
new Person() creates a new object.

