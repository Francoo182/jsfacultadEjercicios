//Creamos los fetch en get de cada cosa que necesitemos
const getUsuario = async(id) =>{
    try{
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        const data = await res.json();
        return data;
    }
    catch(err){
        console.log("Error linea 8 de traer usuarios", err);
    }
}
const getPostsUser = async (userId) =>{
    try{
        const res =await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
        const data =await res.json();
        return data ;
    }
    catch(err){
        console.log("Error linea 19 de traer posts", err);
    }
}
const getPosts = async () =>{
    try{
        const res =await fetch(`https://jsonplaceholder.typicode.com/posts`);
        const data =await res.json();
        return data ;
    }
    catch(err){
        console.log("Error linea 29 de traer posts", err);
    }
}
const getComents= async (postId)=> {
    try {
        const res = await fetch (`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
        const data = await res.json()
        return data
    }
    catch (err){
        console.log("Error al traer comentarios linea 29 modulo get",err)
    }
}
getComents(3).then(comentarios => console.log(comentarios)).catch(err=>console.log(err))
//getUsuario(2).then(usuario => console.log(usuario)).catch(err=>console.log(err))
export{getComents,getPosts,getUsuario,getPostsUser}