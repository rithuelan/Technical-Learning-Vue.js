const user = {
  name: "Rithiha",
  greet() {
    setTimeout(function () {
      console.log(this.name);
    }, 1000);
  }
};

user.greet(); // undefined ❌
