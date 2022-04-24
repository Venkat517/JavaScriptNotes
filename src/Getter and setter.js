// Getter - to get the access from the obj

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
