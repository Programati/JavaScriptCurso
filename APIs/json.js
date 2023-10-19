/**
 * JSON
 * Javascript Object Notation
 */

/**
 * Tipos de datos que podemos usar en JSON:
 * -Cadena de texto
 * -Numeros
 * -Objetos (en formato JSON)
 * -arreglos
 * -booleanos
 * -null
 * 
 * Tipo de datos que NO podemos usar en JSON:
 * -Funciones
 * -Objetos de fecha ->Primero hay que convertirlo en formato texto
 * -undefined ->Hay que convertirlo a NULL
 */

//datos.json
const datos = `
    {
        "id": 1,
        "nombre": "Martinez Matias",
        "suscriptor_activo": true,
        "posts": [
            {
                "id": 1,
                "titulo": "Titutlo del primer post",
                "texto": "Texto del primer post ..."
            },
            {
                "id": 2,
                "titulo": "Titutlo del segundo post",
                "texto": "Texto del segundo post ..."
            }
        ]
    }
`;
/**
 * parse()
 * Le pasamos una cadena de texto con formato JSON y nos devuelve objeto de javascript
 */
const objeto = JSON.parse(datos);
// console.log(objeto.nombre);

/**
 * stringify()
 * Nos permite pasarle un objeto de javascript y nos devuelve una cadena de texto con objeto en formato JSON
 */

const usuario = {
    nombre: 'Maria',
    correo: 'correo@corre.com',
    coloresFavoritos: ['azul', 'rojo', 'amarillo']
}

console.log(JSON.stringify(usuario));