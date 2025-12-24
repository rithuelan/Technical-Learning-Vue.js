// Simulate fetching data from an API
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data received from API!");
    }, 2000);
  });
}

// Async function
async function getData() {
  console.log("Fetching data...");
  const data = await fetchData(); // Wait until fetchData resolves
  console.log(data);
}

getData();
