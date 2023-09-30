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
console.log(amigos);

/* .SLICE()
    Nos permite copiar una parte de un arreglo a otro
    - 1er parametro - Posición desde donde queremos copiar.
    - 2do parametro - Hasta antes de que elemento copiar
*/
const frutas = ['Manzana', 'Naranja', 'Uva', 'Pera', 'Sandia', 'Banana'];

const frutasFavoritas = frutas.slice(1,4);
console.log(frutasFavoritas);