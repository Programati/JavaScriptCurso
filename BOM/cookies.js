const crearCookie = () => {
    //Esta COOKIE es tempora, dura la sesion del navegador, asi que si cierras el navegador, la cookie tambien desaparecerá
    // document.cookie = 'nombre=Carlos';

    //Podemos ponerle un tiempo de expiracion
    //Es decir, la COOKIE se va a borrar cuando llegue la fecha, por mas que cierres el navegador, no se borrará a menos que la fecha llegue o borres las cookies de forma manual
    document.cookie = 'apellido=Martinez; expires=1 Jan 2024 01:00:00 UTC';
}

const iniciarSesion = () => {
    const usuario = prompt('Usuario:');
    document.cookie = `nombre=${usuario};expires=1 Jan 2024 01:00:00 UTC`;
    alert('Sesión iniciada');
}

//Leer Cookies
// console.log(document.cookie);

//OBTENER COOKIES ESPECIFICAS
//variable para poner el usuario
let usuario;

//Varable para todo el arreglo de COOKIES del navegador, separados por (un punto y coma y un espacio)
const cookies = document.cookie.split('; ');

//A dicho arreglo lo recorremos
cookies.forEach( (cookie) => {
    //metemos las propiuedades en un arreglo y lo separamos por el = y obtenemos la primera posicon, es decir, la 0
    const propiedad = cookie.split('=')[0];
    //La primera posicion tiene los nombres de la cada propiedad de la cooki, entonces buscamos la propiedad de nombre NOMBRE
    if(propiedad === 'nombre'){
        //Separamos a todo el string/arreglo por el signo = y queremos el valor, es decir la segunda posicion [1], donde va a estar el valor del nombre, para finalmente guardarlo en la variable USUARIO
        usuario = cookie.split('=')[1];
    }
});
if(usuario){
    console.log('Hola '+usuario);
}else{
    console.log('Por favor inicie SESION');
}

//Para borar una cockie, trabajamos con la fecha de expiracion, es decir, con solo poner una fecha pasada de expiracion, ya borrariamos la cookie
const cerrarSesion = () => {
    document.cookie = 'nombre=;expires=1 Jan 2020 01:00:00 UTC';
    console.log('Hasta luego');
}