// Difference between Var and Let

Var - It is used in the javascript from the begning
    - It is a function scope
    - It get's hoisted
let - It is introduced in the ES6/ES2015
    - It is block scope(var dec using let will die within the block)
    - It doesn't get hoisted

// Difference between == and ===

== - compare the value

=== - compares both the value and its type


// What is prototype in javascript //
prototypes allows javascript objects to inherit from one and other

eg:

const vehicle = {
	drive: function() {
  	console.log('I am driving')
  }
}

const car = {
	make : 'Honda'
}

Object.setPrototypeOf(car,vehicle)
car.drive()

o/p
I am driving



