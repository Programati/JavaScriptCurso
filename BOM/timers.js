/**
 * windows.setTimeOut()
 * Nos permite ejecutar una funcion despues de cierto tiempo
 */

// const saludo = () => {
//     console.log('Hola');

// }

// let id;

// const iniciar = () => {
//     console.log('Iniciando');
//     id = setTimeout(saludo, 3000);
// }

// const parar = () => {
//     console.log('Parando timer');
//     clearTimeout(id);
// }

/**
 * window.setInterval()
 * Nos permite ejecutar una funcion cada cierto tiempo
 * de forma infinita hasta que lo paremos
 */

//Utilizamos los mismos botones, IniciarTimeOut/PararTimeOut
let cuenta = 0;
let id;
const iniciar = () => {
    id = setInterval(() => {
        console.log(cuenta);
        cuenta++;
    }, 1000);
}

const parar = () => {
    console.log('Paramos la cuenta');
    clearInterval(id);
    console.log('La cuenta quedó en ' + cuenta);
}