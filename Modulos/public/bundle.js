'use strict';

//Forma 1 - Mediante palabras EXPORT DEFAULT
// export default () => {
//     return {
//         nombre: 'Carlos',
//         correo: 'Correo@correo.com'
//     }
// }

//Forma 2 - Final del documento
//En este caso aqui le tenemos que poner nombre a la funcion o varable
const obtenerUsuario = () => {
    return {
        nombre: 'Carlos',
        correo: 'Correo@correo.com'
    }
};

console.log('Soy codigo que se ejecuta desde Empty Export a travez de CONSOLE.LOG');

/**
 * NAMED IMPORTS
 */

console.log(obtenerUsuario());
