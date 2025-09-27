//Importamos las funciones modulares
import { getComents,getPosts,getUsuario,getPostsUser} from "./getFetch.js";

const traerUsuariosYPosts= async(id) => {
    try{
        //Les damos un nombre en nuestro nuevo modulo
        const user = await getUsuario(id);
        const postsUser= await getPostsUser(id)
        const posts = await getPosts();
        //Tenes que traer todos los comentarios de cada post
        //Traeremos los comentaerios de cada posts en paralelo usando promise.all
        const commentsPromises = postsUser.map(post => getComents(post.id))
        const comentariosArray = await Promise.all(commentsPromises)
        //impresionX consola
        console.log("Usuario:", user.name)
        console.log("Cantidad de posts:", posts.length)

        //Del Array que trae hace un for each y imprime que post esta sucediendo y de cada post cuantos comentarios tiene 
        comentariosArray.forEach((comments, idx) => {
            console.log(`Post ${posts[idx].id} tiene ${comments.length} comentarios`)})
    }
    catch (err){
        console.log("Error en el modulo de traer Usuarios Y Posts",err)
    }
}
traerUsuariosYPosts(7);