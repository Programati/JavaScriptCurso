//Cadena de texto
const nombre = 'Texto';
const parrafo = "Este es un 'párrafo'";
const parrafo2 = 'Este es un "párrafo"';
const parrafo3 = 'Este es un \'párrafo\'';

//Numero
const numero = 10;

//Boleano
const usuarioConectado = true;
const mayorQue = 1 > 2;
console.log(usuarioConectado);
console.log(mayorQue);

//ARRAYS
const arreglo = [1,10,5];
const arreglo2 = ['texto', 456, true, {nombre: 'Matias', apellido: 'Martinez'},[1,2,3]]
console.log(arreglo);
console.log(arreglo2);
console.log(arreglo2[3]);

//OBJETOS

const persona = {
    nombre: 'Carlos',
    edad: 27,
    auto: {
        marca: '...',
        color: 'negro'
    }
};
console.log(persona.auto.color.toUpperCase(), persona.nombre);

//FUNCIONES

function hola(){
    console.log('Hola desde una funcion');
}

hola();
