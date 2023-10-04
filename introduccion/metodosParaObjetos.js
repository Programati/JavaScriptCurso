/**
 * Métodos propios o personalizados
 * Los objetos pueden tener métodos echos o creados por nosotros
 * Sólo con agregar una funcion/metodo dentro del objeto
 */

const usuario = {
    nombre: 'Matias',
    edad: 29,
    amigos: ['Alejandro', 'Cesas', 'Ismael'],
    /**Metodo presonalizado */
    saludo: () =>{
        console.log('Hola');
    }
};

/**
 * Objetc.keys()
 * Nos devuelve un arreglo con las llaves(KEYS) del objeto
 * TODO LO QUE ESTA DETRAS DE LOS DOS PUNTOS (elemento: ) la palabra "elemento"
 * es mi KEY o llave del objeto. Con ella hacemos referencia al valor de dicho
 * elemento, es decir nombre: 'Matias'
 * Key NOMBRE
 * valor de la KEY MATIAS
 */
console.log(Object.keys(usuario));

/**
 * Object.values()
 * Lo mismo que el anteriror pero nos devuelve un arreglo con todos los
 * valores del objeto
 */
console.log(Object.values(usuario));

/**
 * Object.entries()
 * Nos devuelve un arreglo pero con la pareja de KEY/Valores del objeto
 * Es decir, va a ser un arreglo que contiene arreglos de cada pareja de Key/Values
 */
console.log(Object.entries(usuario));
console.log(`El objeto tiene ${(Object.entries(usuario)).length} propiedades`);
