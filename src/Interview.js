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



