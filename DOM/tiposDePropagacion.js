/**
 * Por defecto tenemos el evento
 * Bubbling(false, por defecto)
 * En bubbling el evento del elemento hijo reacciona primero y despues el evento del elemento padre
 * 
 * Capturing(true)
 * En capturing el elemento padre reacciona primero y despues el elemento hijo.
 * 
 * Al EVENTLISTENER le agregamos un 3er parámetro('click', ()=>{}, true/false)
 * evento CLICK - FUNCION - TRUE para CAPTURING / FALSE para BUBBLING
 * Nota: Solo se pone en el contenedor que esta haciendo la propagacion
 */

const contenedor = document.getElementById('contenedor1');
contenedor.addEventListener('click', (e) =>{
    console.log('Hiciste click en el contenedor');
}, true);//Contenedor que hace la propagacion

const primeraCaja = document.querySelector('.caja');
primeraCaja.addEventListener('click', (e) => {
    console.log('Hiciste click en la caja');
});