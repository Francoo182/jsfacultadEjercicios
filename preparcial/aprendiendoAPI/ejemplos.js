// ejemplo1.js
const url = "https://jsonplaceholder.typicode.com/posts/1";

// Versión con .then()
fetch(url)
  .then(res => res.json())     // transformamos respuesta a JSON
  .then(data => console.log("Con then:", data))
  .catch(err => console.error("Error:", err));

// Versión con async/await
async function ejemploAsync() {
  try {
    const res = await fetch(url);   // espera la promesa de fetch
    const data = await res.json();  // espera la conversión a JSON
    console.log("Con async/await:", data);
  } catch (err) {
    console.error("Error:", err);
  }
}

ejemploAsync();
