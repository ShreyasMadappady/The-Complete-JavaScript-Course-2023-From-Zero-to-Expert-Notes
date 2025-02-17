// Object.create
// Object.create creates a new object, and the prototype of that object will be the object that we passed in.

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

// Object.create
const steven = Object.create(PersonProto);
console.log(steven); // -> {}
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge(); //->35

console.log(steven.__proto__ === PersonProto); // => true

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);
sarah.calcAge(); // -> 58
