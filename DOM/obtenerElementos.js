/**
 * getElementById
 * Nos permite obtener un elemento en base a su atributo ID
 */

// const contenedor1 = document.getElementById('contenedor1');
// console.log(contenedor1);

/**
 * children
 * Nos permite obtener los elementos hijos
 */

// console.log(contenedor1.children);

/**
 * parentElement
 * Nos permite obtener el elemento padre de un elemento
 */
//  console.log(contenedor1.parentElement);

/**
 * getElementByTagName
 * Nos permite obtener una colección de elementos en base a la etiqueta.
 * Nota: Devuelve una colección de HTML. Una colección no es un arreglo
 */

// const divs = document.getElementsByTagName('div');
// console.log(divs);
// console.log(`Tenemos ${divs.length} divs en la página`);

/**
 * getElementByClassName
 * Nos permite obtener una colección de elementos en base a su clase CSS
 * Nota: Devuelve una colección de HTML.
 */

// const clases = document.getElementsByClassName('contenedor');
// console.log(clases);

/**
 * querySelector
 * Nose devuelve el primer elemento que conincida con un selector estilo CSS.
 * Nota: Nos devuelve un nodeList
 */

// const caja = document.querySelector('#contenedor1 .caja');
// console.log(caja);

/**
 * querySelectorAll
 * Nos permite obtener una colección de elementos en base a un selector estilo CSS.
 * Nota: Devuelve un nodeList
 */

// const cajas = document.querySelectorAll('#contenedor1 .caja');
// console.log(cajas);

// cajas.forEach( (caja) => {
//     console.log(caja);
// });

/**
 * closest
 * Nos permite buscar de adentro hacia afuera en busca de un elemento
 */

// const ultimaCaja = document.querySelector('#contenedor2 .caja:last-child');
// console.log(ultimaCaja);

// console.log(ultimaCaja.closest('.contenedor-principal'));

/**
 * Podemos encadena todos los metodos para obtener elementos
 */
const contenedor2 = document.getElementById('contenedor2');
console.log(contenedor2.querySelector('.caja'));