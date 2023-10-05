const fetchPosts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const posts = ['Post1', 'Post2', 'Post3'];
            const error = true;
           
            if(error){
                reject('Hubo un error al intentar obtener los posts');
            }else{
                resolve(posts);
            }
        }, 2000);
    });
}

// console.log('Inicia operacion');
// fetchPosts()
// .then((posts) => {
//     console.log(posts);
// })
// .catch((error) => {
//     console.log(error);
// });

// console.log('Finaliza operacion');

const mostrarPost = async() => {
    try{
        const posteo = await fetchPosts();
        console.log(posteo);
    }catch(error){
        console.log(error);
    }
}

mostrarPost();