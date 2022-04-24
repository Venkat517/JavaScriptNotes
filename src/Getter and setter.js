// Getter - In JS Getter methods are used to acess the properties of the object
// Setter - In JS Setter methods are used to change the values of an object

const person = {
  firstName : 'Venkata S',
  lastName : 'Bonam',
  get fullName() {
    return `${person.firstName} ${person.lastName}`
  },
  set fullName(value) {
    const parts = value.split(' ');
    this.firstName = parts[0];
    this.lastName = parts[1];
  }
};

console.log(person.firstName);
console.log(person.fullName);
person.fullName = 'Venkata Satyanarayana Bonam'
console.log(person.firstName);
console.log(person.fullName);

o/p

Venkata S
Venkata S Bonam
Venkata
Venkata Satyanarayana
