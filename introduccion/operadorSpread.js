/**
 * Operador Spread
 * Permite tomar los elementos de un arreglo u objeto y expandirlos en otro sitios
 * ...TalArreglo/Objeto
 * Es decir me va a sobreescribir
 * es importante el ORDEN
 * 
 */
const frutas = ['Manzana', 'Anana', 'Pera', 'Melon'];
const comidaFavorita = ['Pizza', 'Sushi', ...frutas];
console.log(comidaFavorita);

const datosLogin = {
    correo: 'correo@correo.com',
    pass: '123'
};
const usuario = {
    nombre: 'Matias',
    ...datosLogin,//Operador Spread
    edad: 20
};
console.log(usuario);

/**
 * Paramtro Rest
 * Permite que una funcion contenga un numero indefinido de argumentos.
 * Los argumentos extra que encuentre los convierte en un arreglo
 */

// const registrarUsuario = (nombre, correo, ...datosAdicionales) => {
//     console.log(nombre, correo, datosAdicionales);
// };

// registrarUsuario('Carlos', 'correo@correo.com');
// registrarUsuario('Alex', 'alex@correo.com', 28, 'España');


/**
 * Destructuración de Objetos
 * Nos permite obtener elementos o propiedades de un arreglo u objeto y guardarlos en una variable
 */
const amigos = ['Alejandro', 'Cesar', 'Manuel'];
//En el arreglo, definimos las variables con nombres cualquiera
const [primerAmigo, segundoAmigo, tercerAmigo, cuartoAmigo] = amigos;
console.log(cuartoAmigo);

const persona = {
    nombre: 'Carlos',
    edad: 27,
    pais: 'Mexico'
};
//En el arreglo de objetos tenemos que poner los nombres de las propiedades exactas que tiene el objeto.
const {nombre, pais} = persona;
//Me creara una variable NOMBRE con la propiedad nombre y su valor
console.log(nombre, typeof nombre);

const mostrarEdad = (nombre, edad) => {
    console.log(`${nombre} tiene ${edad} años`);
}

mostrarEdad(persona.nombre, persona.edad);

const mostrarEdad2 = ({nombre, edad}) => {
    console.log(`${nombre} tiene ${edad} años`);
}

mostrarEdad2(persona);
