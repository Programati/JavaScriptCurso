/**
 * .length
 * Devuelve el número de elementos del arreglo o texto
 */
const texto = 'Hola a todos, Hola mundo';
const arregloTexto = ['Hola', 'Mundo']
console.log(texto.length);
console.log(arregloTexto.length);

/**
 * .indexOf() .lastIndexOf()
 * Encontrar el primer y la ultimo elemento que querramos
*/
console.log(texto.indexOf('H'));
console.log(arregloTexto.indexOf('Hola'));
/**
 * Si queremos cortar una cadena de texto, y mostrar a partir de donde cortamos
 * Primero buscamos ese elemento, (La letra H) con INDEXOF o LASTINDEXOF y a partir de ese elemento mostramos
 * Para ello utilizaremos .slice() Nos devuelve un fragmento de una cadena de
 * texto 
*/
console.log(texto.slice(texto.lastIndexOf('H')));
/**
 * Tambien lo podemos hacer DESDE y HASTA, es decir, SLICE acepta 2 parametros
*/
console.log(
    texto.slice(
        texto.lastIndexOf('H'),//Dede ultima H de [Hola a todos, Hola mundo]
        texto.lastIndexOf(' '))//Hasta el ultimio espacio en blanco

);
/*Resultado tiene que dar HOLA, es decir 
1° cortamos la frase [Hola a todos, Hola mundo] = [Hola mundo]
2° cortamos hasta el espacio en blanco = [Hola]
*/

/**----------------------------- */

/**
 * .split()
 * Convierte una cadena de texto en un arreglo
 * Tenemos que especificar donde cortar elemento
 * 
 * 1er parametro - el caracter que funciona como separador
 */
console.log(texto.split(' '));