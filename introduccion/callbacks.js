/**
 * Son funciones que podemos pasar como parametros a otra funcion
 * Con el fin de que una funcion pueda ejecutar otra funcion
 */
const obtenerPostDeUsuario = (usuario, callback) => {
    console.log(`Obteniendo los post de ${usuario} ...`);

    setTimeout(() => {
        let post = ['Post1', 'Post2', 'Post3'];
        callback(post);
    },2000);
}

obtenerPostDeUsuario('Carlos', (posts) => {
    console.log(posts);
})