/**
 * NAMED IMPORTS
 */

// import {nombre, obtenerPosts} from './namedExports';

// Importar nombers de variables o funciones con ALIAS
// import {nombre as nombreImportado, obtenerPosts} from './namedExports';
// console.log('Mi nombre es '+nombreImportado);
// console.log(obtenerPosts());

/**
 * NAMESPACE Imports
 * Crea un objeto con TODAS las variables/funciones
 */
// import * as datos from './namedExports';
// console.log(datos.nombre);
// console.log(datos.obtenerPosts());

/**
 * DEFAULT IMPORTS
 * Sin llaves y poniendole el nombre que querramos
 * pero de un solo archivo y una sola funcion
 */
import obtener from './defaultExport';
console.log(obtener());

/**
 * EMPTY IMPORTS
 * Carga todo el codigo pero sin hacer ningun objeto
 */
import './emptyExport';