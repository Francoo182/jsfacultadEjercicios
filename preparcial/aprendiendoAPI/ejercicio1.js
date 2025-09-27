const url = "https://jsonplaceholder.typicode.com/users"

async function traerUsuario() {
    try{
       const res = await fetch(url)
       const data = await res.json()
       console.log(data)
    }
    catch(error){
        console.log("Error en la API:", error)
    }
}
traerUsuario()