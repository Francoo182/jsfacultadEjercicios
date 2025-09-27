//Traer solo los emails
const url = "https://jsonplaceholder.typicode.com/users"
async function traerMails() {
    try{
        const res = await fetch(url);
        const data = await res.json();
        const email=data.filter(usuarios=> usuarios.email && usuarios.email !== null);
        console.log(email)
        
    }
    catch(error){
        console.log("Algun error en la API ",error)
    }
    
}
traerMails()