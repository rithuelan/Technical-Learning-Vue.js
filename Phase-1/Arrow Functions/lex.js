const person = {
  name: "Rithiha",
  greet: function() {
    setTimeout(() => {
      console.log(`Hello, my name is ${this.name}`); // 'this' refers to person
    }, 1000);
  }
};

person.greet(); // Hello, my name is Rithiha
