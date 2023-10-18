document.getElementById('boton1').addEventListener('click', () => {
    const nombre = prompt('Escribe tu nombre');
    window.localStorage.setItem('nombreUsuario', nombre);
});

document.getElementById('boton2').addEventListener('click', () => {
    window.localStorage.removeItem('nombreUsuario');
});

if(window.localStorage.nombreUsuario){
    console.log('Hola ' + window.localStorage.nombreUsuario);
}else{
    console.log('Hola anonimo');
}