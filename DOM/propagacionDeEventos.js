/**
 * De esta forma la propagación de eventos se ejecuta, es decir, se ejecuta el evento del padre y del hijo
 */
// const contenedor = document.getElementById('contenedor1');
// contenedor.addEventListener('click', (e) =>{
//     console.log('Hiciste click en el contenedor');
// });

// const primeraCaja = document.querySelector('.caja');
// primeraCaja.addEventListener('click', (e) => {
//     console.log('Hiciste click en la caja');
// });

/**
 * Para evitar lo anterior, podemos hacer que en el hijo, le digamos que pare la propagacion de eventos, para así sólo ejecutar el evento hijo
 */
const contenedor = document.getElementById('contenedor1');
contenedor.addEventListener('click', (e) =>{
    console.log('Hiciste click en el contenedor');
});

const primeraCaja = document.querySelector('.caja');
primeraCaja.addEventListener('click', (e) => {
    e.stopPropagation();//Codigo para detener la propagacion
    console.log('Hiciste click en la caja');
});