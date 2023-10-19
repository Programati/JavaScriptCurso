const endpoint = 'https://api.npoint.io/c81ff7047f2c24bc5fc4';

/**
 * Ejemplo con THEN y CATCH
 */
// fetch(endpoint)
//     .then((respuesta) => {
//         console.log('El servidor respondió');
        
//         const promesa = respuesta.json();
//         promesa
//             .then((datos) => {
//                 console.log(datos);
//             })
//             .catch((error) => {
//                 console.log(error);
//             })
//     })
//     .catch((error) => {
//         console.log(error);
//     });

/**
 * Ejemplo con Async/Await
 */

const obtenerDatos = async() => {
    const respuesta = await fetch(endpoint);
    const datos = await respuesta.json();

    console.log(datos);
}

obtenerDatos();