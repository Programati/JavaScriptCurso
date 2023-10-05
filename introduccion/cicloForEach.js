// const amigos = ['Ana', 'Belen', 'Carlos', 'Daniel', 'Facundo', 'Gabriel', 'Hila', 'Ivan', 'Javier'];
// amigos.forEach((amigo, index) => console.log(`El amigo ${amigo} esta en la posicion ${index}`));

/**
 * Ciclo for in
 * Nos permite recorrer las propiedades de un OBJETO
 */
const persona = {
    nombre: 'Matias',
    edad: 29,
    correo: 'matias@correo.com'
}
// for(propiedad in persona){
//     console.log(persona[propiedad]);
// }

/**
 * CICLO FOR OF
 * Nos peromite recorrer los valores de un objeto iterable.
 * Podemos recorrer: Arreglos, Cadenas de Texto, Mapas y Lista de Nodos, etc
 */
const etiquetas = document.head.children;
// console.log(etiquetas);
// for(elemento of etiquetas){
//     console.log(elemento);
// }
/**
 * Una alternativa, podemos meter a la constatne ETIQUETA en un arreglo, para así usar un foreach
 * [...etiqueta] Utilizando SPREADS
 */
[...etiquetas].forEach((elemento)=> console.log(elemento));
// console.log();