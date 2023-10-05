/**
 * .toString()
 * Convierte una variable de TIPO NUMERO a STRING
 */
// const numero = 20;
// console.log(numero, typeof numero);
// const text = numero.toString();
// console.log(text, typeof text);

/**
 * .toFixed()
 * Permite obtener un numero con la cantidad de decimales especificados
 */
// const numero = 3.1415;
// console.log(numero.toFixed());
// console.log(numero.toFixed(1));
// console.log(numero.toFixed(5));


/**
 * parseInt() ES UNA FUNCION
 * Intenta transformar un valor a un entero
 * Ejemplo Para Formularios
 */
// const numero1 = prompt('Escribe un numero');
// const numero2 = parseInt(prompt('Escribe otro numero'));
// console.log(parseInt(numero1)+numero2);

/**
 * parseFloat() ES UNA FUNCION
 * Lo mismo pero lo convierte en float
 */
// const numero1 = prompt('Escribe un numero');
// const numero2 = parseFloat(prompt('Escribe otro numero'));
// console.log(parseFloat(numero1)+numero2);

/**
 * Math.random()
 * Genera un numero al azar entre 0 y 1
 */
// const numero = Math.random();
// console.log(numero);
/**
 * Math.floor()
 * Redondea hacia abajo un numero
 */
console.log(Math.floor('10.1'));
console.log(Math.floor('10.99'));

/**
 * Math.ceil()
 * Redondea hacia arriba un numero
 */
console.log(Math.ceil('10.1'));
console.log(Math.ceil('10.99'));

/**
 * Math.round()
 * Redondea hacia el entero más cercano
 */
console.log(Math.round('10.1'));
console.log(Math.round('10.99'));

/**
 * Ejemplo de obtener un numero RANDOM del 0 al 100
 */

let numero = Math.random();
console.log(Math.floor(numero*101));