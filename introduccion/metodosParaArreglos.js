const colores = ['Rojo', 'Verde', 'Azul'];

console.log(colores.length);

//Metodo toString(), me muestra los elementos del arreglo en forma de String
document.body.innerHTML = colores.toString();

//Metodo JOIN me separa a los elementos y los muestra de forma STRING
//En este caso separa cada elemento por un espacio y un guion
console.log(colores.join(' - '));
// document.body.innerHTML = colores.join(' => ');

//.SORT me ordena de forma alfabetica y lo modifica para que esten ordenadas
const letras = ['z', 'h', 'a', 'f'];
console.log(letras.sort());
console.log(letras.reverse());
//Aqui ordena con los que empiezan con los primeros numeros
const numeros = ['9', '3', '1', '15', '0', 8];
console.log(numeros.sort());

const arreglo1 = [1,2,3];
const arreglo2 = ['A', 'B', 'C'];
const arreglo3 = arreglo1.concat(arreglo2);
console.log(arreglo3);

//Agregar elementos al final
const fila = ['n1', 'n2'];
fila.push('n3');
console.log(fila);
//Eliminar el ultimo elemento
fila.pop();
console.log(fila);
//Eliminar el primer elemento
const nEliminado = fila.shift();
console.log(nEliminado);
console.log(fila);
//Insertar un elemento al inicio
fila.unshift('n0');
console.log(fila);
//Agregar elementos en el lugar que querramos
const amigos = ['Alejandro', 'Cesar', 'Manuel'];

//SPLICE();
//Primer Argumento es la posicion en donde vamos a ubicarnos
//Segundo Argumento es la cantidad de elementos a liminar
//Tercer Argumento y más, van a ser lo elementos a agregar desde la posicion en la cual estamos ubicados
amigos.splice(/*Posicionamiento*/1, /*Cantidad de elementos a eliminar*/0, /*Elemento a agregar*/'Rafael', 'Roberto');
// console.log(amigos);

/* .SLICE()
    Nos permite copiar una parte de un arreglo a otro
    - 1er parametro - Posición desde donde queremos copiar.
    - 2do parametro - Hasta antes de que elemento copiar
*/
const frutas = ['Manzana', 'Naranja', 'Uva', 'Pera', 'Sandia', 'Banana'];

const frutasFavoritas = frutas.slice(1,4);
// console.log(frutasFavoritas);

/* .INDEXOF()
    Obtiene el primer index de un elemento, del primer elemento que encontro
    Si hay uno 2 veces, nos devuelve el primero
    Si no encuentra el elemento nos retorna -1
    Nos facilita saber si el elemento está dentro del arreglo
*/

const nombres = ['Cristian','Carlos', 'Rafael', 'Cristian','Estefania', 'Rodrigo', 'Rafael','Carlos','Carla'];
console.log(nombres.indexOf('Matias'));
/* .LASTINDEXOF()
    Obtiene el ultimo index de un elemento, lo mismo que el anterior
    Por ejemplo si hay dos elementos iguales, nos da la posicion del ultimo
    En este caso nos devuelve la posicion del ultimo CARLOS
*/
// console.log(nombres.indexOf('Carlos'));
// console.log(nombres.lastIndexOf('Carlos'));

/*
    .forEach()
    Nos permite ejecutar una funcion por cada elemento
*/
// nombres.forEach((nombre, index, arregloEntero) => {
//     console.log(`Hola ${nombre} (${index}) (${arregloEntero})`);
// });

/**
 * .find()
 * Nos permite recorrer un arreglo y devuelve el PRIMER elemento que retornemos
 */

const resultado = nombres.find((nombre) => {
    if(nombre[0] == 'C'){
        return nombre;
    }
});

console.log(resultado);

/**
 * .map()
 * Nos prermite ejecutar una función por cada elemento y crear un nuevo arreglo
 * en base a los resultados de esa funcion
 * Siempre va a devolver la misma cantidad de elementos del arreglo, por más
 * que tenga un elemento indefinido o le agreguemos una condicion que no cumpla
 */

console.log(
    nombres.map((nombre) => nombre.toUpperCase())
);

/**
 * .filter()
 * Igual que el MAP, pero va a devolver los resultados de una condicion
 */

console.log(
    nombres.filter((nombre)=>{
        if(nombre[0] == 'C'){
            return nombre;
        }
    } )
);

/**
 * includes()
 * Nos permite saber si el arreglo contiene un elemento especificado
 */
console.log(
    nombres.includes('Ezequiel')
);

/**
 * .every()
 * Nos permite ejecutar una condicional sobre cada elemento y nos devuelve
 * TRUE si TODOS los elementos cumplen la funcion
 */
const productos = [
    {
        nombre: 'pera',
        precio: 120
    },
    {
        nombre: 'manzana',
        precio: 100
    },
    {
        nombre: 'naranja',
        precio: 150
    },
    {
        nombre: 'uva',
        precio: 90
    }
]
console.log(
    productos.every((frutas)=>{
        return frutas.precio > 149;
    })
);
/**
 * .some()
 * Nos permite ejecutar una condicional sobre cada elemento y nos devuelve
 * TRUE si ALGUN elemento cumple la funcion, es decir, por lo menos uno
 */

console.log(
    productos.some((frutas)=>{
        return frutas.precio > 149;
    })
);