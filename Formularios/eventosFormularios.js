const formulario = document.forms['formulario-donacion'];

/**
 * Evento submit
 * Nos permite detectar cuando el usuario intenta enviar un formularios
 */

/**
 * Lo que vamos a realizar es que al apretar el boton ENVIAR, eviatr enviar los datos, para primero validar los datos o lo que querramos, y luego enviar dichos datos con JavaScript
*/
formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('Enviando datos');
});


/**
 * Evento Change
 * Nos permite detectar cuando hay un cambio en el valor de un input, select o textarea.
 * Se ejecuta cuando cambiamos el valor del input y damos click fuera.
 */

formulario.pais.addEventListener('change', (e) => {
    console.log('El pais cambio');
    console.log('El nuevo valor es ' + e.target.value);
});

formulario['cantidad-5'].addEventListener('change', ()=> console.log('La cantidad cambio'));
formulario['cantidad-10'].addEventListener('change', ()=> console.log('La cantidad cambio'));

/**
 * Evento Focus
 * Nos permite detectar cuando un input recibe el foco de atención
 */
formulario.correo.addEventListener('focus', () => {
    console.log('El input correo ahora es el foco de atención');
});
/**
 * Evento Blur
 * Nos permite detectar cuando un input pierde el foco de atención
 */
formulario.correo.addEventListener('blur', () => {
    console.log('El input correo ya no es el foco de atención');
});

/**
 * Evento keydown
 * Nos permite detectar cuando una tecla es presionada sobre un input
 */

formulario.correo.addEventListener('keydown', (e) => {
    console.log(e.key);
});
/**
 * Evento keyup
 * Nos permite detectar cuando una tecla es levantada al escribir sobre un input
 */

formulario.correo.addEventListener('keyup', (e) => {
    console.log(e.key);
});