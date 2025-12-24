const user = {
  name: "Rithiha",
  greet() {
    setTimeout(() => {
      console.log(this.name);
    }, 1000);
  }
};

user.greet(); // Rithiha ✅
