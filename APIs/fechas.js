/*
	API para trabajar con fechas 
	Javascript expone su API para que podamos trabajar con fechas.
    Página para explorar más la APIs de fecha
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
*/

/**
 * Crear un objeto de fecha
 * Para poder trabajar con fechas primero tenemos que crear un objeto de fecha
 */

//Fecha actual
const fechaActual = new Date();
// console.log(fechaActual);

const cumpleaños = new Date('1994-06-12T12:00:00');
// console.log(cumpleaños);

/**
 * Metodos para trabajar con fechas
 */

console.log(fechaActual.toISOString());
console.log(fechaActual.toDateString());
console.log(fechaActual.toTimeString());

//Obtener Mes
console.log('Mes: '+cumpleaños.getMonth());
//Obtener Dia
console.log('Dia:'+cumpleaños.getDate());
//Obtener Año
console.log('Año:'+cumpleaños.getFullYear());