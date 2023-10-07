//href - Retorna la URL de la página actual
console.log(location.href);
//hostname - Retorna el HOST de la página actual
console.log(location.hostname);
//pathname - Retorna la ruta y archivo de la pagina actual
console.log(location.pathname);
//protocol - Retorna el protocolo utilizado
console.log(location.protocol);

const cargarDocumento = () => {
    location.assign('https://google.com');
}

const regresar = () => {
    // history.back(); //regresar
    history.forward(); //ir adelante
}
