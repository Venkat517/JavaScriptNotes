
const person = {
  firstName : 'Venkata S',
  lastName : 'Bonam',
  get fullName() {
    return `${person.firstName} ${person.lastName}`
  },
  set fullName(value) {
    if (typeof value !== 'string')
      throw new Error ('value is not a string')
    const parts = value.split(' ');
    this.firstName = parts[0];
    this.lastName = parts[1];
  }
};

console.log(person.firstName);
console.log(person.fullName);

try {
person.fullName = null;
}

catch(e) {
  console.log(e);
}

console.log(person.firstName);
console.log(person.fullName);

console.log(person);

o/p

Error: value is not a string
    at Object.set fullName [as fullName] (<anonymous>:11:42)
    at <anonymous>:22:19
