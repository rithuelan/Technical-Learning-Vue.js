function fetchData() {
  return new Promise((resolve, reject) => {
    reject("API failed");
  });
}

async function loadData() {
  try {
    const data = await fetchData();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
}

loadData();
