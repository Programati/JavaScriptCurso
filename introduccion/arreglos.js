const arreglo = ['Texto', 456.10, false, {nombre: 'Rodrigo'}, ['Hola', 'Mundo']];
console.log(arreglo);

const amigos = ['Alejandro', 'Manuel', 'Cesar'];
console.log(amigos[2]);

const colores = [];
colores[0] = 'Rojo';
colores[1] = 'Verde';
colores[3] = 'Blanco';

//Meter elementos al final
colores.push('Azul');

console.log(colores, 'El arreglo tiene '+colores.length+' colores');