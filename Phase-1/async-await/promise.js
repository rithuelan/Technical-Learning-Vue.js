function fetchUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ id: 1, name: "Rithiha" });
    }, 2000);
  });
}

fetchUser().then(user => {
  console.log(user);
});
